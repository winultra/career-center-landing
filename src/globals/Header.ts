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
      name: 'siteTitle',
      label: 'Title сайта',
      type: 'text',
      defaultValue: 'ПрофСтарт',
    },
    {
      name: 'siteDescription',
      label: 'Описание сайта',
      type: 'textarea',
      defaultValue:
        'Центр карьеры, профориентации и предпринимательства для подростков, родителей, молодёжи и начинающих предпринимателей.',
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