import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'logo',
      type: 'relationship',
      relationTo: 'media',
      required: false,
    },
  ],
}