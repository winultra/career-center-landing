import type { GlobalConfig } from 'payload'
import { isAdminOrEditor } from '@/lib/access'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Подвал',
  access: {
    read: isAdminOrEditor,
    update: isAdminOrEditor,
  },
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
      name: 'addressLink',
      label: 'Ссылка адреса (необязательно)',
      type: 'text',
      admin: {
        description: 'Если указана, текст адреса станет ссылкой. Для внешних ссылок откроется новая вкладка.',
      },
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
      label: 'Старая контактная строка',
      type: 'text',
      defaultValue: 'proforientaciy86',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'contactText',
      label: 'Текст контакта',
      type: 'text',
      defaultValue: 'proforientaciy86',
      admin: {
        description: 'Текст, который будет показан посетителю в подвале, например «Группа ВКонтакте».',
      },
    },
    {
      name: 'contactLink',
      label: 'Ссылка контакта',
      type: 'text',
      admin: {
        description: 'Ссылка для текста контакта. Внешние ссылки откроются в новой вкладке.',
      },
    },
    {
      name: 'isVisible',
      label: 'Показывать подвал',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
