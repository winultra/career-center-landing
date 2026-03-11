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
        { name: 'isVisible', label: 'Показывать блок', type: 'checkbox', defaultValue: true },
      ],
    },
    {
      name: 'introSlider',
      label: 'Банеры',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок секции', type: 'text' },
        {
          name: 'slides',
          label: 'Слайды',
          type: 'array',
          maxRows: 50,
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
        { name: 'isVisible', label: 'Показывать блок', type: 'checkbox', defaultValue: true },
      ],
    },
    {
      name: 'audience',
      label: 'Для кого работает центр',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', required: true },
        { name: 'isVisible', label: 'Показывать блок', type: 'checkbox', defaultValue: true },
        {
          name: 'items',
          label: 'Карточки',
          type: 'array',
          minRows: 3,
          maxRows: 3,
          fields: [
            { name: 'title', label: 'Заголовок карточки', type: 'text', required: true },
            {
              name: 'points',
              label: 'Пункты',
              type: 'array',
              maxRows: 5,
              fields: [
                { name: 'text', label: 'Текст пункта', type: 'text', required: true },
              ],
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
        },
      ],
    },
    {
      name: 'consultations',
      label: 'Консультации',
      type: 'group',
      admin: {
        disabled: true,
        condition: () => false,
      },
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', required: true },
        { name: 'subtitle', label: 'Подзаголовок', type: 'textarea' },
        { name: 'isVisible', label: 'Показывать блок', type: 'checkbox', defaultValue: true },
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
        { name: 'isVisible', label: 'Показывать блок', type: 'checkbox', defaultValue: true },
        {
          name: 'items',
          label: 'Карточки',
          type: 'array',
          minRows: 4,
          maxRows: 20,
          fields: [
            { name: 'title', label: 'Название услуги', type: 'text', required: true },
            { name: 'price', label: 'Стоимость', type: 'text', required: true },
            {
              name: 'points',
              label: 'Пункты',
              type: 'array',
              minRows: 1,
              maxRows: 6,
              fields: [
                { name: 'text', label: 'Текст пункта', type: 'text', required: true },
              ],
            },
            { name: 'buttonText', label: 'Название кнопки', type: 'text', defaultValue: 'Купить' },
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
        { name: 'text', label: 'Описание', type: 'textarea' },
        { name: 'buttonText', label: 'Текст кнопки', type: 'text', defaultValue: 'Оставить заявку' },
        { name: 'buttonLink', label: 'Ссылка кнопки', type: 'text', defaultValue: '#contact-form' },
        { name: 'managerText', label: 'Текст нижней подписи', type: 'text', defaultValue: 'или написать:' },
        { name: 'managerLink', label: 'Ссылка нижней иконки', type: 'text', defaultValue: '#contact-form' },
        {
          name: 'managerIcon',
          label: 'Иконка нижней ссылки',
          type: 'relationship',
          relationTo: 'media',
        },
        { name: 'isVisible', label: 'Показывать блок', type: 'checkbox', defaultValue: true },
      ],
    },
    {
      name: 'entrepreneurship',
      label: 'Предпринимательство',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', required: true },
        { name: 'isVisible', label: 'Показывать блок', type: 'checkbox', defaultValue: true },
        {
          name: 'items',
          label: 'Карточки',
          type: 'array',
          minRows: 1,
          maxRows: 3,
          fields: [
            { name: 'title', label: 'Заголовок', type: 'text', required: true },
            { name: 'price', label: 'Сумма', type: 'text', required: true },
            {
              name: 'points',
              label: 'Пункты',
              type: 'array',
              maxRows: 5,
              fields: [
                { name: 'text', label: 'Текст пункта', type: 'text', required: true },
              ],
            },
            { name: 'buttonText', label: 'Текст кнопки', type: 'text', defaultValue: 'Купить' },
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
        { name: 'isVisible', label: 'Показывать блок', type: 'checkbox', defaultValue: true },
      ],
    },
    {
      name: 'newsSection',
      label: 'Секция новостей',
      type: 'group',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', defaultValue: 'Новости' },
        { name: 'subtitle', label: 'Подзаголовок', type: 'textarea' },
        { name: 'isVisible', label: 'Показывать блок', type: 'checkbox', defaultValue: true },
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
        { name: 'isVisible', label: 'Показывать блок', type: 'checkbox', defaultValue: true },
      ],
    },
  ],
}