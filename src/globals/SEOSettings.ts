import type { GlobalConfig } from 'payload'

export const SEOSettings: GlobalConfig = {
  slug: 'seo-settings',
  fields: [
    {
      name: 'defaultTitle',
      type: 'text',
    },
    {
      name: 'defaultDescription',
      type: 'textarea',
    },
  ],
}