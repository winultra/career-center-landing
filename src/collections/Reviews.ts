import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  labels: {
    singular: 'Отзыв',
    plural: 'Отзывы',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'sourceName', 'isPublished'],
  },
  fields: [
    {
      name: 'name',
      label: 'Имя',
      type: 'text',
      required: true,
    },
    {
      name: 'sourceName',
      label: 'Источник отзыва',
      type: 'text',
      required: false,
    },
    {
      name: 'avatar',
      label: 'Аватар',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'text',
      label: 'Текст отзыва',
      type: 'textarea',
      required: true,
    },
    {
      name: 'sortOrder',
      label: 'Порядок сортировки',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'isPublished',
      label: 'Опубликовано',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}