export type LandingFallbackResponse = {
  news: Array<{
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    publishedAt: string
    sortOrder: number
    image: string | null
  }>
  reviews: Array<{
    id: string
    name: string
    text: string
    source: string | null
    sortOrder: number
    date: string
    avatar: string | null
  }>
  header: {
    logo: string | null
    siteTitle: string
    siteDescription: string
    buttonText: string
    buttonLink: string
  }
  hero: {
    title: string
    subtitle: string
    buttonText: string
    buttonLink: string
    image: string | null
    isVisible: boolean
  }
  introSlider: {
    title: string | null
    slides: Array<{
      id: string
      title: string
      text: string
      image: string | null
      link: string | null
    }>
  }
  about: {
    title: string
    text: string
    image: string | null
    isVisible: boolean
  }
  audience: {
    title: string
    isVisible: boolean
    items: Array<{
      id: string
      title: string
      points: string[]
      buttonText: string
      buttonLink: string
    }>
  }
  careerGuidance: {
    title: string
    isVisible: boolean
    items: Array<{
      id: string
      title: string
      price: string
      points: string[]
      buttonText: string
      buttonLink: string
    }>
  }
  cta: {
    title: string
    text: string
    buttonText: string
    buttonLink: string
    managerText: string
    managerLink: string
    managerIcon: string | null
    isVisible: boolean
  }
  entrepreneurship: {
    title: string
    isVisible: boolean
    items: Array<{
      id: string
      title: string
      price: string
      points: string[]
      buttonText: string
      buttonLink: string
    }>
  }
  footer: {
    logo: string | null
    addressTitle: string
    addressText: string
    contactTitle: string
    phone: string
    email: string
    isVisible: boolean
  }
  reviewsSection: {
    title: string
    subtitle: string | null
    isVisible: boolean
  }
  newsSection: {
    title: string
    subtitle: string | null
    isVisible: boolean
  }
  contactSection: {
    title: string
    subtitle: string | null
    formTitle: string | null
    submitButtonText: string | null
    description: string
    phone: string
    email: string
    address: string
    image: string | null
    isVisible: boolean
  }
}

export const landingMetadataFallback = {
  title: 'ПрофСтарт',
  description:
    'Центр карьеры, профориентации и предпринимательства для подростков, родителей, молодёжи и начинающих предпринимателей.',
}

export const landingResponseFallback: LandingFallbackResponse = {
  news: [
    {
      id: 'news-1',
      title: 'Обновление центра и новые направления',
      slug: 'obnovlenie-centra-i-novye-napravleniya',
      excerpt:
        'Мы обновили название и фирменный стиль, потому что расширили горизонты и усилили фокус на карьерном развитии.',
      content:
        'Мы обновили название и фирменный стиль, потому что расширили горизонты и усилили фокус на карьерном развитии.',
      publishedAt: '2025-02-14T00:00:00.000Z',
      sortOrder: 1,
      image: '/images/news/news_1.jpg',
    },
    {
      id: 'news-2',
      title: 'ПрофСтарт собрал открытую встречу',
      slug: 'profstart-sobral-otkrytuyu-vstrechu',
      excerpt:
        'На открытой встрече обсудили консультации, карьерные маршруты и образовательные инициативы центра.',
      content:
        'На открытой встрече обсудили консультации, карьерные маршруты и образовательные инициативы центра.',
      publishedAt: '2025-02-21T00:00:00.000Z',
      sortOrder: 2,
      image: '/images/news/news_2.jpg',
    },
  ],
  reviews: [
    {
      id: 'review-1',
      name: 'Екатерина Яковлева',
      text:
        'Особенно понравилась персонализированная поддержка в центре карьеры. Помогли подготовиться к интервью и увереннее двигаться дальше.',
      source: 'VK',
      sortOrder: 1,
      date: '2025-01-12T00:00:00.000Z',
      avatar: '/images/reviews/review_1.jpg',
    },
    {
      id: 'review-2',
      name: 'Анна Смирнова',
      text:
        'После консультаций стало намного понятнее, куда двигаться дальше и как опираться на свои сильные стороны.',
      source: 'VK',
      sortOrder: 2,
      date: '2025-01-18T00:00:00.000Z',
      avatar: '/images/reviews/review_1.jpg',
    },
  ],
  header: {
    logo: '/logo/logo.png',
    siteTitle: landingMetadataFallback.title,
    siteDescription: landingMetadataFallback.description,
    buttonText: 'Связаться с нами',
    buttonLink: '#contact-form',
  },
  hero: {
    title: 'ВАШ ПУТЕВОДИТЕЛЬ В МИР КАРЬЕРНЫХ РЕШЕНИЙ',
    subtitle: 'Пространство для подростков, родителей, молодёжи и начинающих предпринимателей.',
    buttonText: 'Связаться с нами',
    buttonLink: '#contact-form',
    image: '/images/image_1.png',
    isVisible: true,
  },
  introSlider: {
    title: null,
    slides: [
      {
        id: 'slide-1',
        title: 'Баннер 1',
        text: '',
        image: '/images/banners/baner1.png',
        link: null,
      },
      {
        id: 'slide-2',
        title: 'Баннер 2',
        text: '',
        image: '/images/banners/baner2.png',
        link: null,
      },
      {
        id: 'slide-3',
        title: 'Баннер 3',
        text: '',
        image: '/images/banners/baner3.png',
        link: null,
      },
    ],
  },
  about: {
    title: 'О нас',
    text:
      'Сегодня мир меняется быстрее, чем привычные карьерные сценарии. Центр помогает подросткам, родителям, молодёжи и начинающим предпринимателям делать более осознанный выбор.',
    image: '/images/image_2.jpg',
    isVisible: true,
  },
  audience: {
    title: 'Для кого работает центр ПрофСтарт?',
    isVisible: true,
    items: [
      {
        id: 'audience-1',
        title: 'ПОДРОСТКИ 13-17 ЛЕТ И РОДИТЕЛИ',
        points: [
          'не знает, кем хочет стать;',
          'сомневается в себе и своих способностях;',
          'боится ошибиться с выбором профессии;',
        ],
        buttonText: 'Оставить заявку',
        buttonLink: '#contact-form',
      },
      {
        id: 'audience-2',
        title: 'МОЛОДЕЖЬ И ПРЕДПРИНИМАТЕЛИ',
        points: [
          'ищет полезное, безопасное и современное;',
          'хочет видеть результат, а не просто занятость.',
        ],
        buttonText: 'Оставить заявку',
        buttonLink: '#contact-form',
      },
    ],
  },
  careerGuidance: {
    title: 'Профориентация',
    isVisible: true,
    items: [
      {
        id: 'guidance-1',
        title: 'Курс «Профессия по призванию»',
        price: '30 000 ₽',
        points: [
          'Разбирается в своих интересах и возможностях;',
          'Узнаёт, какие профессии подходят именно ему;',
        ],
        buttonText: 'Купить',
        buttonLink: '#contact-form',
      },
      {
        id: 'guidance-2',
        title: 'Подростковый профориентационный клуб «ПрофСтарт»',
        price: '4 000 ₽',
        points: [
          'Понимание, откуда берутся деньги и как они работают;',
          'Учатся планировать доходы и расходы;',
        ],
        buttonText: 'Купить',
        buttonLink: '#contact-form',
      },
    ],
  },
  cta: {
    title: 'Есть вопросы или сложности с выбором?',
    text: 'Оставьте заявку, и мы свяжемся с вами, чтобы помочь с выбором следующего шага.',
    buttonText: 'Отправить заявку',
    buttonLink: '#contact-form',
    managerText: 'или написать:',
    managerLink: '#contact-form',
    managerIcon: '/images/logo_max.png',
    isVisible: true,
  },
  entrepreneurship: {
    title: 'Предпринимательство',
    isVisible: true,
    items: [
      {
        id: 'business-1',
        title: 'Подготовка и запуск бизнеса',
        price: '25 000 ₽',
        points: [
          'Анализируем и оцениваем бизнес-идею',
          'Изучаем рынок и целевую аудиторию',
        ],
        buttonText: 'Купить',
        buttonLink: '#contact-form',
      },
      {
        id: 'business-2',
        title: 'Бизнес-консультации',
        price: '5 000 ₽',
        points: [
          'Помогаем структурировать действия и первые приоритеты',
          'Поддерживаем на старте и в развитии',
        ],
        buttonText: 'Купить',
        buttonLink: '#contact-form',
      },
    ],
  },
  footer: {
    logo: '/logo/footer-logo.png',
    addressTitle: 'Адрес',
    addressText: 'г. Югорск ул. 40 лет Победы, 11 А',
    contactTitle: 'Пишите/Звоните',
    phone: '+7 (922) 259-84-47',
    email: 'proforientaciy86',
    isVisible: true,
  },
  reviewsSection: {
    title: 'Отзывы',
    subtitle: null,
    isVisible: true,
  },
  newsSection: {
    title: 'Новости',
    subtitle: null,
    isVisible: true,
  },
  contactSection: {
    title: 'Связаться с нами',
    subtitle: null,
    formTitle: 'Оставить заявку',
    submitButtonText: 'Отправить',
    description:
      'Оставьте заявку, мы свяжемся с вами, проконсультируем и ответим на все интересующие вас вопросы',
    phone: '+7 (922) 259-84-47',
    email: 'proforientaciy86',
    address: 'г. Югорск ул. 40 лет Победы, 11 А',
    image: '/images/contact_as.png',
    isVisible: true,
  },
}
