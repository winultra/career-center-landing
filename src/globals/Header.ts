import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Шапка',
  fields: [
    {
      name: 'logo',
      label: 'Логотип',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'buttonText',
      label: 'Текст кнопки',
      type: 'text',
      defaultValue: 'Оставить заявку',
    },
    {
      name: 'buttonLink',
      label: 'Ссылка кнопки',
      type: 'text',
      defaultValue: '#contact-form',
    },
  ],
}