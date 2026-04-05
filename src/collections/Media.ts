import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '@/lib/access'

export const Media: CollectionConfig = {
  access: {
    read: isAdminOrEditor,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  slug: 'media',
  labels: {
    singular: 'Медиафайл',
    plural: 'Медиа',
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      label: 'Альтернативный текст',
      type: 'text',
      required: false,
    },
  ],
}
