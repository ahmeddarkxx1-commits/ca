import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@nexoura/database';

export async function GET() {
  const cookieStore = await cookies();
  const authSessionId = cookieStore.get('sb-access-token')?.value;

  if (!authSessionId) {
    return NextResponse.json({ success: false, message: 'Authentication required.' }, { status: 401 });
  }

  const session = await prisma.sessions.findUnique({
    where: { auth_session_id: authSessionId },
    include: {
      user: {
        include: {
          user_roles: {
            include: {
              role: {
                include: {
                  role_permissions: {
                    include: { permission: true }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  if (!session || !session.is_active || !session.user || (session.expires_at && session.expires_at < new Date())) {
    return NextResponse.json({ success: false, message: 'Session invalid or expired.' }, { status: 401 });
  }

  const roles = session.user.user_roles.map((userRole) => userRole.role);
  const permissions = roles
    .flatMap((role) => role.role_permissions)
    .map((rolePermission) => rolePermission.permission.slug);

  return NextResponse.json({
    success: true,
    message: 'Session validated.',
    data: {
      user: {
        id: session.user.id,
        email: session.user.email,
        first_name: session.user.first_name,
        last_name: session.user.last_name,
        is_active: session.user.is_active,
        roles: roles.map((role) => ({ id: role.id, name: role.name, slug: role.slug })),
        permissions
      }
    }
  });
}
