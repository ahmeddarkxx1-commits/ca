export function hasPermission(userPermissions: string[], requiredPermission: string) {
  return userPermissions.includes(requiredPermission);
}

export function getUserPermissions(roles: Array<{ permissions: Array<{ slug: string }> }>) {
  const permissionSet = new Set<string>();
  roles.forEach((role) => {
    role.permissions.forEach((permission) => {
      permissionSet.add(permission.slug);
    });
  });
  return Array.from(permissionSet);
}
