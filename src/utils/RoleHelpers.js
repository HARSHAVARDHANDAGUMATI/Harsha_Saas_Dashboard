export const canAccess = (userRole, allowedRoles = []) => {
  if (!allowedRoles.length) return true
  return allowedRoles.includes(userRole)
}
