export type UserRole = 'admin' | 'editor'

type AccessUser = {
  id?: string | number
  role?: UserRole | null
}

type AccessArgs = {
  req: {
    user?: AccessUser | null
  }
  id?: string | number
}

const getRole = (user?: AccessUser | null) => user?.role ?? null

export const hasRole = (user: AccessUser | null | undefined, roles: UserRole[]) =>
  roles.includes(getRole(user) as UserRole)

export const isAdmin = ({ req }: AccessArgs) => hasRole(req.user, ['admin'])

export const isAdminOrEditor = ({ req }: AccessArgs) => hasRole(req.user, ['admin', 'editor'])

export const isAdminOrSelf = ({ req, id }: AccessArgs) =>
  hasRole(req.user, ['admin']) || (req.user?.id != null && id != null && String(req.user.id) === String(id))

export const canUpdateOwnUser = ({ req }: AccessArgs) => Boolean(req.user)
