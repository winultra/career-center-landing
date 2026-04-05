import type { CollectionConfig } from 'payload'
import { canUpdateOwnUser, isAdmin, isAdminOrSelf } from '@/lib/access'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Пользователь',
    plural: 'Пользователи',
  },
  access: {
    admin: isAdmin,
    create: isAdmin,
    delete: isAdmin,
    read: isAdminOrSelf,
    update: canUpdateOwnUser,
  },
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'role',
      label: 'Роль',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Администратор', value: 'admin' },
        { label: 'Редактор', value: 'editor' },
      ],
      access: {
        create: isAdmin,
        read: isAdminOrSelf,
        update: isAdmin,
      },
    },
  ],
}
