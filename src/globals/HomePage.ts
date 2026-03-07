import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Главная страница',
  fields: [
    {
      name: 'hero',
      label: 'Первый экран',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', required: true },
        { name: 'subtitle', label: 'Подзаголовок', type: 'textarea' },
        { name: 'buttonText', label: 'Текст кнопки', type: 'text', defaultValue: 'Оставить заявку' },
        { name: 'buttonLink', label: 'Ссылка кнопки', type: 'text', defaultValue: '#contact-form' },
        { name: 'image', label: 'Изображение', type: 'relationship', relationTo: 'media' },
      ],
    },
    {
      name: 'tilesSection',
      label: 'Плитки',
      type: 'group',
      fields: [
        {
          name: 'items',
          label: 'Элементы',
          type: 'array',
          maxRows: 12,
          fields: [
            { name: 'title', label: 'Заголовок', type: 'text', required: true },
            { name: 'text', label: 'Текст', type: 'textarea' },
            { name: 'icon', label: 'Иконка', type: 'relationship', relationTo: 'media' },
          ],
        },
      ],
    },
    {
      name: 'introSlider',
      label: 'Слайдер',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок секции', type: 'text' },
        {
          name: 'slides',
          label: 'Слайды',
          type: 'array',
          maxRows: 20,
          fields: [
            { name: 'title', label: 'Заголовок', type: 'text', required: true },
            { name: 'text', label: 'Текст', type: 'textarea' },
            { name: 'image', label: 'Изображение', type: 'relationship', relationTo: 'media' },
          ],
        },
      ],
    },
    {
      name: 'about',
      label: 'О нас',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', required: true },
        { name: 'text', label: 'Текст', type: 'textarea', required: true },
        { name: 'image', label: 'Изображение', type: 'relationship', relationTo: 'media' },
      ],
    },
    {
      name: 'audience',
      label: 'Для кого работает центр',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', required: true },
        {
          name: 'items',
          label: 'Карточки',
          type: 'array',
          maxRows: 12,
          fields: [
            { name: 'title', label: 'Заголовок', type: 'text', required: true },
            { name: 'text', label: 'Текст', type: 'textarea' },
            { name: 'buttonText', label: 'Текст кнопки', type: 'text', defaultValue: 'Оставить заявку' },
            { name: 'buttonLink', label: 'Ссылка кнопки', type: 'text', defaultValue: '#contact-form' },
          ],
        },
      ],
    },
    {
      name: 'consultations',
      label: 'Консультации',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', required: true },
        { name: 'subtitle', label: 'Подзаголовок', type: 'textarea' },
        {
          name: 'items',
          label: 'Элементы',
          type: 'array',
          maxRows: 20,
          fields: [
            { name: 'title', label: 'Заголовок', type: 'text', required: true },
            { name: 'description', label: 'Описание', type: 'textarea' },
            { name: 'price', label: 'Цена', type: 'text' },
            { name: 'buttonText', label: 'Текст кнопки', type: 'text', defaultValue: 'Оставить заявку' },
            { name: 'buttonLink', label: 'Ссылка кнопки', type: 'text', defaultValue: '#contact-form' },
          ],
        },
      ],
    },
    {
      name: 'careerGuidance',
      label: 'Профориентация',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', required: true },
        {
          name: 'items',
          label: 'Карточки',
          type: 'array',
          maxRows: 20,
          fields: [
            { name: 'title', label: 'Заголовок', type: 'text', required: true },
            { name: 'price', label: 'Цена', type: 'text' },
            { name: 'packageIncludes', label: 'Что входит в пакет', type: 'textarea' },
            { name: 'buttonText', label: 'Текст кнопки', type: 'text', defaultValue: 'Купить' },
            { name: 'buttonLink', label: 'Ссылка кнопки', type: 'text', defaultValue: '#contact-form' },
          ],
        },
      ],
    },
    {
      name: 'cta',
      label: 'Блок призыва к действию',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', required: true },
        { name: 'text', label: 'Текст', type: 'textarea' },
        { name: 'buttonText', label: 'Текст кнопки', type: 'text', defaultValue: 'Оставить заявку' },
        { name: 'buttonLink', label: 'Ссылка кнопки', type: 'text', defaultValue: '#contact-form' },
        { name: 'maxButtonText', label: 'Текст кнопки MAX', type: 'text', defaultValue: 'Написать в MAX' },
        { name: 'maxLink', label: 'Ссылка на MAX', type: 'text' },
      ],
    },
    {
      name: 'entrepreneurship',
      label: 'Предпринимательство',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', required: true },
        { name: 'subtitle', label: 'Подзаголовок', type: 'textarea' },
        {
          name: 'items',
          label: 'Карточки',
          type: 'array',
          maxRows: 20,
          fields: [
            { name: 'title', label: 'Заголовок', type: 'text', required: true },
            { name: 'description', label: 'Описание', type: 'textarea' },
            { name: 'image', label: 'Изображение', type: 'relationship', relationTo: 'media' },
            { name: 'buttonText', label: 'Текст кнопки', type: 'text', defaultValue: 'Оставить заявку' },
            { name: 'buttonLink', label: 'Ссылка кнопки', type: 'text', defaultValue: '#contact-form' },
          ],
        },
      ],
    },
    {
      name: 'reviewsSection',
      label: 'Секция отзывов',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', defaultValue: 'Отзывы' },
        { name: 'subtitle', label: 'Подзаголовок', type: 'textarea' },
      ],
    },
    {
      name: 'newsSection',
      label: 'Секция новостей',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', defaultValue: 'Новости' },
        { name: 'subtitle', label: 'Подзаголовок', type: 'textarea' },
      ],
    },
    {
      name: 'contactSection',
      label: 'Форма связи',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', defaultValue: 'Связаться с нами' },
        { name: 'subtitle', label: 'Подзаголовок', type: 'textarea' },
        { name: 'formTitle', label: 'Заголовок формы', type: 'text', defaultValue: 'Оставить заявку' },
        { name: 'submitButtonText', label: 'Текст кнопки отправки', type: 'text', defaultValue: 'Отправить' },
      ],
    },
  ],
}