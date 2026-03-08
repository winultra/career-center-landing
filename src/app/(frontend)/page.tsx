'use client'
import { useEffect, useRef, useState } from 'react'

const navItems = [
  { href: '#about', label: 'О центре' },
  { href: '#guidance', label: 'Профориентация' },
  { href: '#entrepreneurship', label: 'Предпринимательство' },
  { href: '#consultations', label: 'Консультация' },
  { href: '#news', label: 'Новости' },
]
const footerInfo = {
  logo: '/logo/footer-logo.png',
  addressTitle: 'Адрес',
  addressText: 'г. Югорск ул. 40 лет Победы, 11 А',
  contactTitle: 'Пишите/Звоните',
  phone: '+7 (922) 259-84-47',
  email: 'proforientaciy86',
}

const featureCards = [
  {
    title: 'Помогаем раскрыть сильные стороны и определить направления.',
    strong: ['Помогаем раскрыть'],
    iconClass: 'feature-card__icon--search',
  },
  {
    title: 'Выстраиваем осознанный карьерный маршрут.',
    strong: ['карьерный'],
    iconClass: 'feature-card__icon--puzzle',
  },
  {
    title: 'Развиваем навыки, которые нужны в жизни и на современном рынке труда.',
    strong: ['Развиваем навыки'],
    iconClass: 'feature-card__icon--idea',
  },
  {
    title: 'Поддерживаем запуск и развитие собственного дела.',
    strong: ['Поддерживаем запуск', 'развитие'],
    iconClass: 'feature-card__icon--rocket',
  },
]

const bannerSlides = [
  {
    image: '/images/banners/baner1.png',
    href: '#contact-form',
  },
  {
    image: '/images/banners/baner2.png',
    href: undefined,
  },
  {
    image: '/images/banners/baner3.png',
    href: undefined,
  },
]

const audienceCards = [
  {
    title: 'ПОДРОСТКИ 13-17 ЛЕТ И РОДИТЕЛИ',
    items: [
      'не знает, кем хочет стать;',
      'сомневается в себе и своих способностях;',
      'боится ошибиться с выбором профессии;',
      'хочет развить уверенность, коммуникацию, гибкие навыки;',
      'устал от скучных и формальных занятий.',
    ],
  },
  {
    title: 'МОЛОДЕЖЬ И ПРЕДПРИНИМАТЕЛИ',
    items: [
      'переживает за будущее ребёнка;',
      'не хочет давления и случайных решений;',
      'ищет полезное, безопасное и современное;',
      'хочет видеть результат, а не просто занятость.',
    ],
  },
  {
    title: 'СОТРУДНИЧЕСТВО С НАМИ',
    items: [
      'хочет выстроить карьеру осознанно;',
      'думает о запуске собственного дела;',
      'боится допустить ошибки на старте;',
      'нуждается в поддержке и наставничестве;',
    ],
  },
]

const consultationCards = [
  {
    title: 'Профориентации подростка',
    items: [
      'курс «Профессия по призванию»',
      'подростковый профориентационный клуб',
      'индивидуальные консультации и диагностики',
      'профориентационные мероприятия',
      'проф-туры по России',
    ],
    theme: 'light',
  },
  {
    title: 'Бизнес-консультация',
    items: [
      'помощь в запуске бизнеса с нуля',
      'бизнес-планирование',
      'сопровождение в первый год работы',
      'помощь с мерами господдержки (при наличии условий)',
      'обучающие семинары и тренинги',
      'работа с действующими предпринимателями',
    ],
    theme: 'dark',
  },
]
const reviewsCards = [
  {
    name: 'Екатерина Яковлева',
    avatar: '/images/reviews/review_1.jpg',
    text:
      'Особенно понравилась персонализированная поддержка в центре карьеры. Мне не только предложили вакансии, но и помогли подготовиться к интервью, благодаря чему я нашла работу в крупной компании.',
    date: '12.01.2025',
    source: 'VK',
  },
  {
    name: 'Анна Смирнова',
    avatar: '/images/reviews/review_1.jpg',
    text:
      'Очень ценно, что специалисты помогли определить сильные стороны и предложили несколько направлений развития. После консультаций стало намного понятнее, куда двигаться дальше.',
    date: '18.01.2025',
    source: 'VK',
  },
  {
    name: 'Мария Иванова',
    avatar: '/images/reviews/review_1.jpg',
    text:
      'Спасибо за внимательный подход и реальные рекомендации. Подготовка к собеседованию и помощь с резюме дали уверенность, и в итоге я получила приглашение на работу.',
    date: '25.01.2025',
    source: 'VK',
  },
  {
    name: 'Ольга Петрова',
    avatar: '/images/reviews/review_1.jpg',
    text:
      'Понравилось, что в центре не дают шаблонных советов, а действительно вникают в ситуацию. После встречи удалось структурировать цели и составить понятный план действий.',
    date: '02.02.2025',
    source: 'VK',
  },
]

const newsCards = [
  {
    id: 'news-1',
    title: 'Обновление центра и новые направления',
    image: '/images/news/news_1.jpg',
    excerpt:
      'Мы обновили название и фирменный стиль, потому что расширили горизонты. Теперь мы говорим не только о выборе профессии, но и о карьерном пути и предпринимательстве.',
    content:
      'Мы обновили название и фирменный стиль, потому что расширили горизонты. Теперь мы говорим не только о выборе профессии, но и о карьерном пути и предпринимательстве. Это изменение отражает новый этап развития центра и расширение программ для подростков, родителей, студентов и начинающих предпринимателей.',
    date: '14.02.2025',
    isVisible: true,
  },
  {
    id: 'news-2',
    title: 'ПрофСтарт собрал открытую встречу',
    image: '/images/news/news_2.jpg',
    excerpt:
      'Мы провели открытую встречу для участников и партнёров, где обсудили новые форматы консультаций, карьерных маршрутов и образовательных инициатив.',
    content:
      'Мы провели открытую встречу для участников и партнёров, где обсудили новые форматы консультаций, карьерных маршрутов и образовательных инициатив. В рамках встречи представили обновлённые программы, рассказали о планах по развитию центра и ответили на вопросы гостей.',
    date: '21.02.2025',
    isVisible: true,
  },
  {
    id: 'news-3',
    title: 'Новые форматы карьерной навигации',
    image: '/images/news/news_1.jpg',
    excerpt:
      'Мы обновили название и фирменный стиль, потому что расширили горизонты. Теперь мы говорим не только о выборе профессии, но и о карьерном пути и предпринимательстве.',
    content:
      'Мы обновили название и фирменный стиль, потому что расширили горизонты. Теперь мы говорим не только о выборе профессии, но и о карьерном пути и предпринимательстве. Новые форматы помогут участникам быстрее ориентироваться в возможностях и принимать осознанные решения.',
    date: '01.03.2025',
    isVisible: true,
  },
  {
    id: 'news-4',
    title: 'Запуск нового образовательного цикла',
    image: '/images/news/news_2.jpg',
    excerpt:
      'В центре стартует новый цикл мероприятий, посвящённый развитию навыков, построению карьерного маршрута и первым шагам в предпринимательстве.',
    content:
      'В центре стартует новый цикл мероприятий, посвящённый развитию навыков, построению карьерного маршрута и первым шагам в предпринимательстве. Участников ждут практические встречи, консультации и живые обсуждения с экспертами.',
    date: '10.03.2025',
    isVisible: true,
  },
]
const guidanceCards = [
  {
    title: 'Курс «Профессия по призванию»',
    price: '30 000 ₽',
    items: [
      'Разбирается в своих интересах и возможностях;',
      'Узнаёт, какие профессии подходят именно ему;',
      'Ориентируется в современном рынке труда;',
      'Развивает навыки, которые нужны в жизни и карьере;',
    ],
  },
  {
    title: 'Подростковый профориентационный клуб «ПрофСтарт»',
    price: '4 000 ₽',
    items: [
      'Понимание, откуда берутся деньги и как они работают;',
      'Учатся планировать доходы и расходы;',
      'Разбираются, что такое бюджет, цели, накопления;',
    ],
  },
  {
    title: 'ПрофТур',
    price: '25 000 ₽',
    items: [
      'Посещают реальные компании и производства;',
      'Знакомятся с разными профессиями «изнутри»;',
      'Общаются с действующими специалистами и руководителями;',
    ],
  },
  {
    title: 'Подростковый профориентационный клуб «ПрофСтарт+»',
    price: '6 000 ₽',
    items: [
      'Больше практики и работы с личными целями;',
      'Расширенные упражнения по выбору направления;',
      'Поддержка в формировании индивидуального карьерного трека;',
    ],
  },
  {
    title: 'Подростковый профориентационный клуб «ПрофСтарт Pro»',
    price: '8 000 ₽',
    items: [
      'Углублённая профдиагностика и разбор сильных сторон;',
      'Построение персонального маршрута развития;',
      'Дополнительные встречи и сопровождение по результатам;',
    ],
  },
]

function renderHighlightedWords(text: string, words: string[]) {
  let result: React.ReactNode[] = [text]

  words.forEach((word) => {
    result = result.flatMap((part, index) => {
      if (typeof part !== 'string') return [part]

      const pieces = part.split(word)
      if (pieces.length === 1) return [part]

      const nodes: React.ReactNode[] = []
      pieces.forEach((piece, pieceIndex) => {
        if (piece) nodes.push(piece)
        if (pieceIndex < pieces.length - 1) {
          nodes.push(
            <strong key={`${word}-${index}-${pieceIndex}`}>{word}</strong>,
          )
        }
      })
      return nodes
    })
  })

  return result
}

export default function HomePage() {
  const [activeBanner, setActiveBanner] = useState(0)
  const [guidanceIndex, setGuidanceIndex] = useState(3)
  const [isGuidanceSliding, setIsGuidanceSliding] = useState(false)
  const [guidanceDirection, setGuidanceDirection] = useState<'prev' | 'next' | null>(null)
  const [isGuidanceMobile, setIsGuidanceMobile] = useState(false)
  const [isGuidanceTransitionEnabled, setIsGuidanceTransitionEnabled] = useState(true)
  const [reviewsIndex, setReviewsIndex] = useState(0)
  const [isReviewsMobile, setIsReviewsMobile] = useState(false)
  const [reviewsStep, setReviewsStep] = useState(0)
  const [newsIndex, setNewsIndex] = useState(0)
  const [isNewsMobile, setIsNewsMobile] = useState(false)
  const [newsStep, setNewsStep] = useState(0)
  const [selectedNews, setSelectedNews] = useState<(typeof newsCards)[number] | null>(null)
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    isPrivacyAccepted: false,
    company: '',
  })
  const [isContactSubmitting, setIsContactSubmitting] = useState(false)
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false)
  const autoSlideRef = useRef<number | null>(null)
  const reviewsAutoSlideRef = useRef<number | null>(null)
  const reviewsViewportRef = useRef<HTMLDivElement | null>(null)
  const newsViewportRef = useRef<HTMLDivElement | null>(null)
  const guidanceLoopCards = [
  ...guidanceCards.slice(-3),
  ...guidanceCards,
  ...guidanceCards.slice(0, 3),
]
  useEffect(() => {
    const media = window.matchMedia('(max-width: 1040px)')
    const sync = () => setIsReviewsMobile(media.matches)
    sync()

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', sync)
      return () => media.removeEventListener('change', sync)
    }

    media.addListener(sync)
    return () => media.removeListener(sync)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1040px)')
    const sync = () => setIsNewsMobile(media.matches)
    sync()

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', sync)
      return () => media.removeEventListener('change', sync)
    }

    media.addListener(sync)
    return () => media.removeListener(sync)
  }, [])

useEffect(() => {
  const updateReviewsStep = () => {
    const viewport = reviewsViewportRef.current
    if (!viewport) return

    const gap = 18
    const viewportWidth = viewport.clientWidth
    const nextStep = isReviewsMobile
      ? viewportWidth + gap
      : (viewportWidth - gap) / 2 + gap

    setReviewsStep(nextStep)
  }

  updateReviewsStep()
  window.addEventListener('resize', updateReviewsStep)

  return () => {
    window.removeEventListener('resize', updateReviewsStep)
  }
}, [isReviewsMobile])

  useEffect(() => {
    const updateNewsStep = () => {
      const viewport = newsViewportRef.current
      if (!viewport) return

      const gap = 18
      const viewportWidth = viewport.clientWidth
      const nextStep = isNewsMobile
        ? viewportWidth + gap
        : (viewportWidth - gap * 2) / 3 + gap

      setNewsStep(nextStep)
    }

    updateNewsStep()
    window.addEventListener('resize', updateNewsStep)

    return () => {
      window.removeEventListener('resize', updateNewsStep)
    }
  }, [isNewsMobile])


  useEffect(() => {
    const startAutoSlide = () => {
      if (autoSlideRef.current !== null) {
        window.clearInterval(autoSlideRef.current)
      }

      autoSlideRef.current = window.setInterval(() => {
        setActiveBanner((prev) => (prev + 1) % bannerSlides.length)
      }, 4500)
    }

    startAutoSlide()

    return () => {
      if (autoSlideRef.current !== null) {
        window.clearInterval(autoSlideRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 720px)')
    const sync = () => setIsGuidanceMobile(media.matches)
    sync()
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', sync)
      return () => media.removeEventListener('change', sync)
    }
    media.addListener(sync)
    return () => media.removeListener(sync)
  }, [])

  useEffect(() => {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about')
    if (!aboutSection) return

    const triggerPoint = aboutSection.offsetTop + aboutSection.offsetHeight * 0.6
    setIsBackToTopVisible(window.scrollY > triggerPoint)
  }

  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleScroll)
  }
}, [])

  const goGuidancePrev = () => {
  setIsGuidanceSliding(true)
  setGuidanceDirection('prev')
  setIsGuidanceTransitionEnabled(true)
  setGuidanceIndex((prev) => prev - 1)
}

const goGuidanceNext = () => {
  setIsGuidanceSliding(true)
  setGuidanceDirection('next')
  setIsGuidanceTransitionEnabled(true)
  setGuidanceIndex((prev) => prev + 1)
}

const handleGuidanceTransitionEnd = () => {
  if (guidanceIndex === 2) {
    setIsGuidanceTransitionEnabled(false)
    setGuidanceIndex(guidanceCards.length + 2)
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsGuidanceSliding(false)
        setGuidanceDirection(null)
      })
    })
    return
  }

  if (guidanceIndex === guidanceCards.length + 3) {
    setIsGuidanceTransitionEnabled(false)
    setGuidanceIndex(3)
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsGuidanceSliding(false)
        setGuidanceDirection(null)
      })
    })
    return
  }

  setIsGuidanceSliding(false)
  setGuidanceDirection(null)
}

useEffect(() => {
  if (!isGuidanceTransitionEnabled) {
    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsGuidanceTransitionEnabled(true)
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }
}, [isGuidanceTransitionEnabled])

const isGuidanceCardVisible = (index: number) => {
  const delta = index - guidanceIndex

  if (isGuidanceMobile) {
    if (!isGuidanceSliding) {
      return delta === 0
    }

    if (guidanceDirection === 'next') {
      return delta >= -1 && delta <= 0
    }

    if (guidanceDirection === 'prev') {
      return delta >= 0 && delta <= 1
    }

    return false
  }

  if (!isGuidanceSliding) {
    return delta >= 0 && delta <= 2
  }

  if (guidanceDirection === 'next') {
    return delta >= -1 && delta <= 2
  }

  if (guidanceDirection === 'prev') {
    return delta >= 0 && delta <= 3
  }

  return false
}

  const visibleReviewsCount = isReviewsMobile ? 1 : 2
  const maxReviewsIndex = Math.max(reviewsCards.length - visibleReviewsCount, 0)

  const resetReviewsAutoSlide = () => {
    if (reviewsAutoSlideRef.current !== null) {
      window.clearInterval(reviewsAutoSlideRef.current)
    }

    reviewsAutoSlideRef.current = window.setInterval(() => {
      setReviewsIndex((prev) => (prev >= maxReviewsIndex ? 0 : prev + 1))
    }, 5000)
  }

  const goReviewsPrev = () => {
    setReviewsIndex((prev) => (prev <= 0 ? maxReviewsIndex : prev - 1))
    resetReviewsAutoSlide()
  }

  const goReviewsNext = () => {
    setReviewsIndex((prev) => (prev >= maxReviewsIndex ? 0 : prev + 1))
    resetReviewsAutoSlide()
  }

  const visibleNewsCards = newsCards.filter((card) => card.isVisible)
  const visibleNewsCount = isNewsMobile ? 1 : 3
  const maxNewsIndex = Math.max(visibleNewsCards.length - visibleNewsCount, 0)

  const goNewsPrev = () => {
    setNewsIndex((prev) => (prev <= 0 ? maxNewsIndex : prev - 1))
  }

  const goNewsNext = () => {
    setNewsIndex((prev) => (prev >= maxNewsIndex ? 0 : prev + 1))
  }

  const handleContactFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = event.target

    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      const { name, checked } = target

      setContactForm((prev) => ({
        ...prev,
        [name]: checked,
      }))
      return
    }

    const { name, value } = target

    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  if (isContactSubmitting) return

  const payload = {
    firstName: contactForm.firstName.trim(),
    lastName: contactForm.lastName.trim(),
    email: contactForm.email.trim(),
    phone: contactForm.phone.trim(),
    message: contactForm.message.trim(),
    sourceBlock: 'contact-form',
    isPrivacyAccepted: contactForm.isPrivacyAccepted,
    company: '',
  }

  setIsContactSubmitting(true)

  try {
    console.log('Contact form payload', payload)
  } finally {
    setIsContactSubmitting(false)
  }
}

  useEffect(() => {
    const startReviewsAutoSlide = () => {
      if (reviewsAutoSlideRef.current !== null) {
        window.clearInterval(reviewsAutoSlideRef.current)
      }

      reviewsAutoSlideRef.current = window.setInterval(() => {
        setReviewsIndex((prev) => (prev >= maxReviewsIndex ? 0 : prev + 1))
      }, 5000)
    }

    startReviewsAutoSlide()

    return () => {
      if (reviewsAutoSlideRef.current !== null) {
        window.clearInterval(reviewsAutoSlideRef.current)
      }
    }
  }, [maxReviewsIndex])

  return (
    <main className="landing-page">
      <div className="page-decor page-decor--left-top" aria-hidden="true" />
      <div className="page-decor page-decor--right-middle" aria-hidden="true" />

      <header className="site-header">
        <div className="container site-header__inner">
          <a href="#hero" className="site-logo">
            <img src="/logo/logo.png" alt="ПрофСтарт" className="site-logo__image" />
          </a>

          <nav className="site-nav" aria-label="Основное меню">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="site-nav__link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="hero" className="hero-section">
        <div className="container hero-section__grid">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title__muted">ВАШ</span>{' '}
              <span className="hero-title__blue">ПУТЕВОДИТЕЛЬ В МИР</span>{' '}
              <span className="hero-title__muted">КАРЬЕРНЫХ</span>{' '}
              <span className="hero-title__blue">РЕШЕНИЙ</span>
            </h1>

            <p className="hero-text">
              Пространство для подростков, родителей, молодёжи и начинающих
              предпринимателей.
            </p>

            <div className="hero-actions">
              <a href="#contact-form" className="button button--hero">
                Связаться с нами
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <img
              src="/images/image_1.png"
              alt=""
              className="hero-visual__image"
            />
          </div>
        </div>
      </section>


      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {featureCards.map((card) => (
              <article key={card.title} className="feature-card">
                <div className={`feature-card__icon ${card.iconClass}`} />

                <p className="feature-card__text">
                  {renderHighlightedWords(card.title, card.strong)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="banner-section">
        <div className="container">
          <div className="banner-slider">
            <div
              className="banner-slider__track"
              style={{ transform: `translateX(-${activeBanner * 33.3333}%)` }}
            >
              {bannerSlides.map((slide, index) => {
                const slideContent = (
                  <img src={slide.image} alt={`Баннер ${index + 1}`} />
                )

                return slide.href ? (
                  <a
                    key={slide.image}
                    href={slide.href}
                    className="banner-slider__slide banner-slider__slide--link"
                  >
                    {slideContent}
                  </a>
                ) : (
                  <div key={slide.image} className="banner-slider__slide">
                    {slideContent}
                  </div>
                )
              })}
            </div>

            <div className="banner-slider__dots">
              {bannerSlides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  className={`banner-slider__dot ${
                    activeBanner === index ? 'banner-slider__dot--active' : ''
                  }`}
                  aria-label={`Показать баннер ${index + 1}`}
                  aria-pressed={activeBanner === index}
                  onClick={() => {
                    setActiveBanner(index)

                    if (autoSlideRef.current !== null) {
                      window.clearInterval(autoSlideRef.current)
                    }

                    autoSlideRef.current = window.setInterval(() => {
                      setActiveBanner((prev) => (prev + 1) % bannerSlides.length)
                    }, 4500)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-side-decor section-side-decor--about-left" aria-hidden="true" />
        <div className="container">
          <div className="about-block">
            <div className="about-block__media" aria-hidden="true">
              <div className="about-block__image-wrap">
                <img
                  src="/images/image_2.jpg"
                  alt=""
                  className="about-block__image"
                />
              </div>
            </div>

            <div className="about-block__content">
              <div className="about-block__heading">
                <h2 className="about-block__title">О нас</h2>
              </div>

              <div className="about-block__text">
                <p>
                  Сегодня в быстро меняющемся мире важно не просто выбрать
                  профессию, а понять себя, свои сильные стороны, интересы и то,
                  как превратить их в осознанный путь развития.
                </p>
                <p>
                  Карьерный путь больше не выглядит как прямая линия: подросткам,
                  родителям, студентам и взрослым всё чаще нужна поддержка,
                  навигация и понятная структура принятия решений.
                </p>
                <p>
                  Центр «ПрофСтарт» помогает увидеть реальные возможности,
                  определить вектор движения и выстроить следующий шаг — в учёбе,
                  профессии или собственном деле.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="container">
          <h2 className="audience-section__title">Для кого работает центр ПрофСтарт?</h2>

          <div className="audience-grid">
            {audienceCards.map((card) => (
              <article key={card.title} className="audience-card">
                <div className="audience-card__head">
                  <h3 className="audience-card__head-title">{card.title}</h3>
                </div>

                <div className="audience-card__body">
                  <ul className="audience-card__list">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <a href="#contact-form" className="button button--audience">
                    Оставить заявку
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="consultations" className="consultations-section">
        <div className="section-side-decor section-side-decor--consultations-right" aria-hidden="true" />
        <div className="container consultations-section__inner">
          <h2 className="consultations-section__title">Консультации</h2>

          <div className="consultations-layout">
            <div className="consultations-layout__arrow" aria-hidden="true">
              <img src="/icons/smart_strelka.svg" alt="" className="consultations-layout__arrow-image" />
            </div>

            <div className="consultations-cards">
              {consultationCards.map((card) => (
                <article
                  key={card.title}
                  className={`consultation-card consultation-card--${card.theme}`}
                >
                  <h3 className="consultation-card__title">{card.title}</h3>

                  <ul className="consultation-card__list">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="consultations-layout__decor" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section id="guidance" className="guidance-section">
        <div className="container">
          <h2 className="guidance-section__title">Профориентация</h2>

          <div className={`guidance-slider ${isGuidanceSliding ? 'guidance-slider--sliding' : ''}`}>
            <div className="guidance-slider__viewport">
              <div
                className={`guidance-slider__track ${
                !isGuidanceTransitionEnabled ? 'guidance-slider__track--no-transition' : ''
                }`}
                style={{
                  transform: `translateX(calc(-${guidanceIndex} * var(--guidance-step)))`,
                }}
                onTransitionEnd={handleGuidanceTransitionEnd}
              >
              {guidanceLoopCards.map((card, index) => (
              <article
                key={`${card.title}-${index}`}
                className={`guidance-card ${
                  index === (isGuidanceMobile ? guidanceIndex : guidanceIndex + 1)
                    ? 'guidance-card--featured'
                    : ''
                } ${
                  !isGuidanceCardVisible(index) ? 'guidance-card--hidden' : ''
                }`}
              >
              <div className="guidance-card__head">
                <h3 className="guidance-card__title">{card.title}</h3>
              </div>

              <div className="guidance-card__body">
                <p className="guidance-card__price">{card.price}</p>

                <ul className="guidance-card__list">
                  {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a href="#contact-form" className="button button--guidance">
               Купить
              </a>
            </div>
          </article>
      ))}
    </div>
  </div>

  <div className="guidance-slider__controls">
    <button
      type="button"
      className="guidance-slider__control guidance-slider__control--prev"
      aria-label="Предыдущие карточки"
      onClick={goGuidancePrev}
    />
    <button
      type="button"
      className="guidance-slider__control guidance-slider__control--next"
      aria-label="Следующие карточки"
      onClick={goGuidanceNext}
    />
  </div>
</div>
        </div>
      </section>

      <section className="question-cta-section">
        <div className="container">
          <div className="question-cta">
            <div className="question-cta__image-wrap" aria-hidden="true">
              <img
                src="/images/to_fq.png"
                alt=""
                className="question-cta__image"
              />
            </div>

            <div className="question-cta__content">
              <h2 className="question-cta__title">
                Есть вопросы или сложности с выбором?
              </h2>

              <p className="question-cta__text">
                Оставьте заявку, мы свяжемся с вами, проконсультируем и ответим
                на все интересующие вас вопросы
              </p>
            </div>

            <div className="question-cta__actions">
              <a href="#contact-form" className="question-cta__button">
                Отправить заявку
              </a>

              <div className="question-cta__manager">
                <span className="question-cta__manager-label">или написать:</span>
                <a href="#contact-form" className="question-cta__manager-link" aria-label="Написать менеджеру">
                  <img
                    src="/images/logo_max.png"
                    alt="MAX"
                    className="question-cta__manager-logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="entrepreneurship" className="entrepreneurship-section">
        <div
          className="section-side-decor section-side-decor--entrepreneurship-left"
          aria-hidden="true"
        />

        <div className="container">
          <h2 className="entrepreneurship-section__title">Предпринимательство</h2>

          <div className="entrepreneurship-grid">
            <article className="entrepreneurship-card">
              <div className="entrepreneurship-card__head">
                <h3 className="entrepreneurship-card__title">
                  Подготовка и запуск бизнеса
                </h3>
              </div>

              <div className="entrepreneurship-card__body">
                <p className="entrepreneurship-card__price">25 000 ₽</p>

                <ul className="entrepreneurship-card__list">
                  <li>Анализируем и оцениваем бизнес-идею</li>
                  <li>Изучаем рынок и целевую аудиторию</li>
                  <li>Рассчитываем стартовые вложения и финансовую модель</li>
                  <li>Формируем или корректируем бизнес-план</li>
                  <li>Помогаем определить первые шаги запуска</li>
                </ul>

                <a href="#contact-form" className="button button--entrepreneurship">
                  Купить
                </a>
              </div>
            </article>

            <article className="entrepreneurship-card entrepreneurship-card--featured">
              <div className="entrepreneurship-card__head">
                <h3 className="entrepreneurship-card__title">Бизнес-консультации</h3>
              </div>

              <div className="entrepreneurship-card__body">
                <p className="entrepreneurship-card__price">5 000 ₽</p>

                <ul className="entrepreneurship-card__list">
                  <li>Тем, кто хочет открыть своё дело, но не знает, с чего начать</li>
                  <li>Тем, кто планирует получить государственную поддержку</li>
                  <li>Тем, кто уже работает, но чувствует хаос в финансах или стратегии</li>
                  <li>Помогаем структурировать действия и первые приоритеты</li>
                </ul>

                <a href="#contact-form" className="button button--entrepreneurship">
                  Купить
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews-section">
        <div className="container">
          <div className="reviews-section__inner">
            <h2 className="reviews-section__title">Отзывы</h2>

            <div className="reviews-slider">
              <div className="reviews-slider__viewport" ref={reviewsViewportRef}>
                <div
                  className="reviews-slider__track"
                  style={{
                    display: 'flex',
                    gap: '18px',
                    transform: `translateX(-${reviewsIndex * reviewsStep}px)`,
                    transition: 'transform 0.45s ease',
                    willChange: 'transform',
                  }}
                >
                  {reviewsCards.map((review) => (
                    <article
                      key={`${review.name}-${review.date}`}
                      className="review-card"
                      style={{
                        flex: isReviewsMobile ? '0 0 100%' : '0 0 calc((100% - 18px) / 2)',
                      }}
                    >
                      <div className="review-card__head">
                        <div className="review-card__avatar-wrap" aria-hidden="true">
                          <img
                            src={review.avatar}
                            alt=""
                            className="review-card__avatar"
                          />
                        </div>

                        <h3 className="review-card__name">{review.name}</h3>
                      </div>

                      <p className="review-card__text">{review.text}</p>

                      <div className="review-card__footer">
                        {review.source ? (
                          <span className="review-card__source">{review.source}</span>
                        ) : (
                          <span />
                        )}
                        <span className="review-card__date">{review.date}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="reviews-slider__controls">
                <button
                  type="button"
                  className="reviews-slider__control reviews-slider__control--prev"
                  aria-label="Предыдущие отзывы"
                  onClick={goReviewsPrev}
                />
                <button
                  type="button"
                  className="reviews-slider__control reviews-slider__control--next"
                  aria-label="Следующие отзывы"
                  onClick={goReviewsNext}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="news-section">
        <div className="container">
          <div className="news-section__inner">
            <h2 className="news-section__title">Новости</h2>

            <div className="news-slider">
              <div className="news-slider__viewport" ref={newsViewportRef}>
                <div
                  className="news-slider__track"
                  style={{
                    display: 'flex',
                    gap: '18px',
                    transform: `translateX(-${newsIndex * newsStep}px)`,
                    transition: 'transform 0.45s ease',
                    willChange: 'transform',
                  }}
                >
                  {visibleNewsCards.map((news) => (
                    <article
                      key={news.id}
                      className="news-card"
                      style={{
                        flex: isNewsMobile
                          ? '0 0 100%'
                          : '0 0 calc((100% - 36px) / 3)',
                      }}
                    >
                      <button
                        type="button"
                        className="news-card__inner"
                        onClick={() => setSelectedNews(news)}
                        aria-label={`Открыть новость: ${news.title}`}
                      >
                        <div className="news-card__image-wrap" aria-hidden="true">
                          <img src={news.image} alt="" className="news-card__image" />
                        </div>

                        <div className="news-card__body">
                          <p className="news-card__excerpt">{news.excerpt}</p>
                        </div>
                      </button>
                    </article>
                  ))}
                </div>
              </div>

              <div className="news-slider__controls">
                <button
                  type="button"
                  className="guidance-slider__control guidance-slider__control--prev"
                  aria-label="Предыдущие новости"
                  onClick={goNewsPrev}
                />
                <button
                  type="button"
                  className="guidance-slider__control guidance-slider__control--next"
                  aria-label="Следующие новости"
                  onClick={goNewsNext}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedNews ? (
        <div className="news-modal" role="dialog" aria-modal="true" aria-labelledby="news-modal-title">
          <div className="news-modal__backdrop" onClick={() => setSelectedNews(null)} />
          <div className="news-modal__dialog">
            <button
              type="button"
              className="news-modal__close"
              aria-label="Закрыть новость"
              onClick={() => setSelectedNews(null)}
            >
              ×
            </button>

            <div className="news-modal__image-wrap" aria-hidden="true">
              <img src={selectedNews.image} alt="" className="news-modal__image" />
            </div>

            <div className="news-modal__content">
              <p className="news-modal__date">{selectedNews.date}</p>
              <h3 id="news-modal-title" className="news-modal__title">
                {selectedNews.title}
              </h3>
              <p className="news-modal__text">{selectedNews.content}</p>
            </div>
          </div>
        </div>
      ) : null}

      <section id="contact-form" className="contact-section">
  <div className="section-side-decor section-side-decor--contact-right" aria-hidden="true" />

  <div className="container">
    <div className="contact-section__grid">
      <div className="contact-section__visual">
        <h2 className="contact-section__title">Связаться с нами</h2>

        <div className="contact-section__image-wrap" aria-hidden="true">
          <img
            src="/images/сontact_as.png"
            alt="сontact_as"
            className="contact-section__image"
          />
        </div>
      </div>

      <div className="contact-section__content">
        <p className="contact-section__lead">
          Оставьте заявку, мы свяжемся с вами, проконсультируем и ответим
          на все интересующие вас вопросы
        </p>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input type="hidden" name="sourceBlock" value="contact-form" />
          <input
            type="text"
            name="company"
            value={contactForm.company}
            onChange={handleContactFieldChange}
            autoComplete="off"
            tabIndex={-1}
            className="contact-form__honeypot"
          />

          <div className="contact-form__fields">
            <input
              type="text"
              name="firstName"
              placeholder="Ваше имя"
              value={contactForm.firstName}
              onChange={handleContactFieldChange}
              className="contact-form__input"
              autoComplete="given-name"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Ваша фамилия"
              value={contactForm.lastName}
              onChange={handleContactFieldChange}
              className="contact-form__input"
              autoComplete="family-name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Электронная почта"
              value={contactForm.email}
              onChange={handleContactFieldChange}
              className="contact-form__input"
              autoComplete="email"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={contactForm.phone}
              onChange={handleContactFieldChange}
              className="contact-form__input"
              autoComplete="tel"
              required
            />

            <textarea
              name="message"
              placeholder="Комментарий"
              value={contactForm.message}
              onChange={handleContactFieldChange}
              className="contact-form__textarea"
              rows={4}
              required
            />
          </div>

          <label className="contact-form__privacy">
            <input
              type="checkbox"
              name="isPrivacyAccepted"
              checked={contactForm.isPrivacyAccepted}
              onChange={handleContactFieldChange}
              required
            />
            <span>Я соглашаюсь на обработку персональных данных</span>
          </label>

          <button
            type="submit"
            className="contact-form__submit"
            disabled={isContactSubmitting}
          >
            {isContactSubmitting ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <a href="#hero" className="site-footer__logo" aria-label="ПрофСтарт — наверх страницы">
            <img src={footerInfo.logo} alt="ПрофСтарт" className="site-footer__logo-image" />
          </a>

          <div className="site-footer__info">
            <div className="site-footer__column">
              <p className="site-footer__label">{footerInfo.addressTitle}</p>
              <p className="site-footer__text">{footerInfo.addressText}</p>
            </div>

            <div className="site-footer__column">
              <p className="site-footer__label">{footerInfo.contactTitle}</p>
              <a
                href={`tel:${footerInfo.phone.replace(/[^\d+]/g, '')}`}
                className="site-footer__link"
              >
                {footerInfo.phone}
              </a>
              <a
                href={`mailto:${footerInfo.email}`}
                className="site-footer__link"
              >
                {footerInfo.email}
              </a>
            </div>
          </div>
        </div>
      </footer>
      <button
  type="button"
  className={`back-to-top ${isBackToTopVisible ? 'back-to-top--visible' : ''}`}
  aria-label="Наверх"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
/>
    </main>
  )
}
