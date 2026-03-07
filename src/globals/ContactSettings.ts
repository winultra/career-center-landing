import type { GlobalConfig } from 'payload'

export const ContactSettings: GlobalConfig = {
  slug: 'contact-settings',
  label: 'Контакты',
  fields: [
    {
      name: 'phone',
      label: 'Телефон',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      name: 'address',
      label: 'Адрес',
      type: 'text',
    },
    {
      name: 'workingHours',
      label: 'Часы работы',
      type: 'text',
    },
    {
      name: 'maxLink',
      label: 'Ссылка на MAX',
      type: 'text',
    },
    {
      name: 'socials',
      label: 'Социальные сети',
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