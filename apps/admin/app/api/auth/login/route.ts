import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { prisma } from '@nexoura/database';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(12)
});

function createSupabaseAdmin() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error('Missing Supabase configuration for authentication.');
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false }
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Request body must be valid JSON.' }, { status: 400 });
  }

  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ success: false, message: 'Invalid credentials format.', errors: parsed.error.flatten().fieldErrors }, { status: 422 });
  }

  const { email, password } = parsed.data;
  const supabaseAdmin = createSupabaseAdmin();
  const { data, error } = await supabaseAdmin.auth.signInWithPassword({
    email,
    password
  });

  if (error || !data.session || !data.user) {
    return NextResponse.json(
      { success: false, message: error?.message ?? 'Authentication failed.' },
      { status: 401 }
    );
  }

  const dbUser = await prisma.users.findUnique({ where: { auth_user_id: data.user.id } });

  if (!dbUser) {
    return NextResponse.json(
      { success: false, message: 'User is not registered in the platform database.' },
      { status: 403 }
    );
  }

  if (!dbUser.is_active) {
    return NextResponse.json({ success: false, message: 'User account is inactive.' }, { status: 403 });
  }

  if (!dbUser.email_verified) {
    return NextResponse.json({ success: false, message: 'User email must be verified before signing in.' }, { status: 403 });
  }

  const authSessionId = data.session.access_token ?? data.session.refresh_token;

  if (!authSessionId) {
    return NextResponse.json({ success: false, message: 'Authentication session could not be established.' }, { status: 500 });
  }

  await prisma.sessions.create({
    data: {
      company_id: dbUser.company_id,
      user_id: dbUser.id,
      auth_session_id: authSessionId,
      provider: 'supabase',
      refresh_token: data.session.refresh_token,
      expires_at: data.session.expires_at ? new Date(data.session.expires_at * 1000) : undefined,
      user_agent: request.headers.get('user-agent') ?? undefined
    }
  });

  await prisma.users.update({
    where: { id: dbUser.id },
    data: { last_login_at: new Date() }
  });

  const response = NextResponse.json({
    success: true,
    message: 'Signed in successfully.',
    data: {
      user: {
        id: dbUser.id,
        email: dbUser.email,
        first_name: dbUser.first_name,
        last_name: dbUser.last_name
      }
    }
  });

  response.cookies.set('sb-access-token', authSessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/'
  });

  if (data.session.refresh_token) {
    response.cookies.set('sb-refresh-token', data.session.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30
    });
  }

  return response;
}
