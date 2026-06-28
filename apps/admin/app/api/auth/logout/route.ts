import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { prisma } from '@nexoura/database';

export async function POST() {
  const cookieStore = await cookies();
  const authSessionId = cookieStore.get('sb-access-token')?.value;

  if (authSessionId) {
    await prisma.sessions.updateMany({
      where: { auth_session_id: authSessionId },
      data: { is_active: false, deleted_at: new Date() }
    });
  }

  const response = NextResponse.json({ success: true, message: 'Signed out successfully.' });
  response.cookies.set('sb-access-token', '', {
    path: '/',
    expires: new Date(0),
    httpOnly: true,
    secure: true,
    sameSite: 'lax'
  });
  response.cookies.set('sb-refresh-token', '', {
    path: '/',
    expires: new Date(0),
    httpOnly: true,
    secure: true,
    sameSite: 'lax'
  });

  return response;
}
