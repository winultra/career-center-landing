import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Подвал',
  fields: [
    {
      name: 'logo',
      label: 'Логотип',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'copyright',
      label: 'Копирайт',
      type: 'text',
    },
    {
      name: 'links',
      label: 'Ссылки',
      type: 'array',
      minRows: 0,
      maxRows: 10,
      fields: [
        {
          name: 'label',
          label: 'Название',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'Ссылка',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}