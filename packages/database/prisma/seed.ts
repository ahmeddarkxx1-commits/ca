import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const company = await prisma.companies.upsert({
    where: { slug: 'nexoura' },
    update: {},
    create: {
      name: 'Nexoura',
      slug: 'nexoura',
      legal_name: 'Nexoura LLC',
      email: 'hello@nexoura.com',
      phone: '+201001234567',
      country: 'Egypt',
      timezone: 'Africa/Cairo',
      language: 'en',
      currency: 'EGP',
      subscription_status: 'active',
      is_active: true,
      is_verified: true
    }
  });

  const permissions = [
    { slug: 'auth.manage', name: 'Manage Authentication' },
    { slug: 'roles.manage', name: 'Manage Roles' },
    { slug: 'permissions.manage', name: 'Manage Permissions' },
    { slug: 'users.manage', name: 'Manage Users' }
  ];

  const createdPermissions = await Promise.all(
    permissions.map((permission) =>
      prisma.permissions.upsert({
        where: { company_id_slug: { company_id: company.id, slug: permission.slug } },
        update: {},
        create: {
          company_id: company.id,
          name: permission.name,
          slug: permission.slug
        }
      })
    )
  );

  const ownerRole = await prisma.roles.upsert({
    where: { company_id_slug: { company_id: company.id, slug: 'owner' } },
    update: {},
    create: {
      company_id: company.id,
      name: 'Owner',
      slug: 'owner',
      description: 'Company owner with full platform access.',
      is_system: true,
      priority: 1
    }
  });

  await Promise.all(
    createdPermissions.map((permission) =>
      prisma.role_permissions.upsert({
        where: { role_id_permission_id: { role_id: ownerRole.id, permission_id: permission.id } },
        update: {},
        create: {
          role_id: ownerRole.id,
          permission_id: permission.id
        }
      })
    )
  );

  const user = await prisma.users.upsert({
    where: { auth_user_id: 'seed-owner-auth-id' },
    update: {},
    create: {
      company_id: company.id,
      auth_user_id: 'seed-owner-auth-id',
      first_name: 'Platform',
      last_name: 'Owner',
      email: 'owner@nexoura.com',
      status: 'active',
      email_verified: true,
      is_active: true
    }
  });

  await prisma.user_roles.upsert({
    where: { user_id_role_id: { user_id: user.id, role_id: ownerRole.id } },
    update: {},
    create: {
      user_id: user.id,
      role_id: ownerRole.id
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
