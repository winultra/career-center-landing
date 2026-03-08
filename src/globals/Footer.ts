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
      name: 'addressTitle',
      label: 'Заголовок адреса',
      type: 'text',
      defaultValue: 'Адрес',
    },
    {
      name: 'addressText',
      label: 'Текст адреса',
      type: 'textarea',
      defaultValue: 'г. Югорск ул. 40 лет Победы, 11 А',
    },
    {
      name: 'contactTitle',
      label: 'Заголовок контактов',
      type: 'text',
      defaultValue: 'Пишите/Звоните',
    },
    {
      name: 'phone',
      label: 'Телефон',
      type: 'text',
      defaultValue: '+7 (922) 259-84-47',
    },
    {
      name: 'email',
      label: 'Email или контактная строка',
      type: 'text',
      defaultValue: 'proforientaciy86',
    },
    {
      name: 'isVisible',
      label: 'Показывать подвал',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}