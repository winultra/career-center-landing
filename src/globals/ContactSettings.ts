import type { GlobalConfig } from 'payload'

export const ContactSettings: GlobalConfig = {
  slug: 'contact-settings',
  label: 'Контакты',
  fields: [
    {
      name: 'title',
      label: 'Заголовок блока',
      type: 'text',
      defaultValue: 'Связаться с нами',
    },
    {
      name: 'description',
      label: 'Описание блока',
      type: 'textarea',
      defaultValue:
        'Оставьте заявку, мы свяжемся с вами, проконсультируем и ответим на все интересующие вас вопросы',
    },
    {
      name: 'image',
      label: 'Изображение',
      type: 'relationship',
      relationTo: 'media',
    },
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
      name: 'isVisible',
      label: 'Показывать блок',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}