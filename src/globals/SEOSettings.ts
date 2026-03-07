import type { GlobalConfig } from 'payload'

export const SEOSettings: GlobalConfig = {
  slug: 'seo-settings',
  label: 'SEO-настройки',
  fields: [
    {
      name: 'defaultTitle',
      label: 'Title по умолчанию',
      type: 'text',
    },
    {
      name: 'defaultDescription',
      label: 'Description по умолчанию',
      type: 'textarea',
    },
    {
      name: 'ogImage',
      label: 'OG-изображение',
      type: 'relationship',
      relationTo: 'media',
    },
  ],
}