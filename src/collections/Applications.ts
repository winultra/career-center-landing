import type { CollectionConfig } from 'payload'

export const Applications: CollectionConfig = {
  slug: 'applications',
  labels: {
    singular: 'Заявка',
    plural: 'Заявки',
  },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'phone', 'sourceBlock', 'status', 'createdAt'],
  },
  fields: [
    {
      name: 'firstName',
      label: 'Имя',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Фамилия',
      type: 'text',
      required: true,
    },
    {
      name: 'fullName',
      label: 'Полное имя',
      type: 'text',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ siblingData }) => {
            const firstName =
              typeof siblingData?.firstName === 'string' ? siblingData.firstName.trim() : ''
            const lastName =
              typeof siblingData?.lastName === 'string' ? siblingData.lastName.trim() : ''

            return [firstName, lastName].filter(Boolean).join(' ')
          },
        ],
      },
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      label: 'Телефон',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      label: 'Комментарий',
      type: 'textarea',
      required: true,
    },
    {
      name: 'sourceBlock',
      label: 'Источник заявки',
      type: 'text',
    },
    {
      name: 'isPrivacyAccepted',
      label: 'Согласие на обработку данных',
      type: 'checkbox',
      required: true,
      defaultValue: false,
    },
    {
      name: 'status',
      label: 'Статус',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'Новая', value: 'new' },
        { label: 'В работе', value: 'in_progress' },
        { label: 'Завершена', value: 'done' },
      ],
    },
    {
      name: 'createdAt',
      label: 'Дата создания',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        readOnly: true,
      },
    },
  ],
}