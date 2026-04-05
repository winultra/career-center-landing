import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '@/lib/access'

export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: 'Новость',
    plural: 'Новости',
  },
  access: {
    admin: isAdminOrEditor,
    create: isAdminOrEditor,
    delete: isAdminOrEditor,
    read: isAdminOrEditor,
    update: isAdminOrEditor,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedAt', 'isPublished'],
  },
  fields: [
    {
      name: 'title',
      label: 'Заголовок',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'excerpt',
      label: 'Краткое описание',
      type: 'textarea',
    },
    {
      name: 'content',
      label: 'Содержание',
      type: 'richText',
      required: true,
    },
    {
      name: 'coverImage',
      label: 'Обложка',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'publishedAt',
      label: 'Дата публикации',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'isPublished',
      label: 'Опубликовано',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'sortOrder',
      label: 'Порядок сортировки',
      type: 'number',
      defaultValue: 0,
      admin: {
        step: 1,
      },
    },
    {
      name: 'seoTitle',
      label: 'SEO Title',
      type: 'text',
    },
    {
      name: 'seoDescription',
      label: 'SEO Description',
      type: 'textarea',
    },
  ],
}
