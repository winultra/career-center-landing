'use client'
import { useEffect, useRef, useState } from 'react'

const navItems = [
  { href: '#about', label: 'О центре' },
  { href: '#guidance', label: 'Профориентация' },
  { href: '#entrepreneurship', label: 'Предпринимательство' },
  { href: '#consultations', label: 'Консультация' },
  { href: '#news', label: 'Новости' },
]
const mobileMenuItems = [
  {
    href: '#about',
    label: 'О центре',
    iconClass: 'mobile-menu__icon mobile-menu__icon--about',
  },
  {
    href: '#guidance',
    label: 'Профориентация',
    iconClass: 'mobile-menu__icon mobile-menu__icon--guidance',
  },
  {
    href: '#entrepreneurship',
    label: 'Предпринимательство',
    iconClass: 'mobile-menu__icon mobile-menu__icon--entrepreneurship',
  },
  {
    href: '#consultations',
    label: 'Консультация',
    iconClass: 'mobile-menu__icon mobile-menu__icon--consultations',
  },
  {
    href: '#news',
    label: 'Новости',
    iconClass: 'mobile-menu__icon mobile-menu__icon--news',
  },
] as const
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
    href: undefined,
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
type LandingNewsCard = {
  id: string | number
  title: string
  image: string | null
  excerpt: string
  content: unknown
  publishedAt: string | null
  sortOrder: number
}

type LandingReviewCard = {
  id: string | number
  name: string
  text: string
  source: string | null
  sortOrder: number
  date: string | null
  avatar: string | null
}

type LandingHeader = {
  logo?: string | null
  siteTitle?: string | null
  siteDescription?: string | null
}

type LandingHero = {
  title?: string | null
  subtitle?: string | null
  buttonText?: string | null
  buttonLink?: string | null
  image?: string | null
  isVisible?: boolean
}
type LandingIntroSlide = {
  id?: string | number
  title?: string | null
  text?: string | null
  image?: string | null
  link?: string | null
}
type LandingIntroSlider = {
  title?: string | null
  slides?: LandingIntroSlide[]
}

type LandingAbout = {
  title?: string | null
  text?: string | null
  image?: string | null
  isVisible?: boolean
}

type LandingAudienceItem = {
  id?: string | number
  title?: string | null
  points?: string[]
  buttonText?: string | null
  buttonLink?: string | null
}

type LandingAudience = {
  title?: string | null
  isVisible?: boolean
  items?: LandingAudienceItem[]
}

type LandingCareerGuidanceItem = {
  id?: string | number
  title?: string | null
  price?: string | null
  points?: string[]
  buttonText?: string | null
  buttonLink?: string | null
}


type LandingCareerGuidance = {
  title?: string | null
  isVisible?: boolean
  items?: LandingCareerGuidanceItem[]
}

type LandingCta = {
  title?: string | null
  text?: string | null
  buttonText?: string | null
  buttonLink?: string | null
  managerText?: string | null
  managerLink?: string | null
  managerIcon?: string | null
  isVisible?: boolean
}

type LandingEntrepreneurshipItem = {
  id?: string | number
  title?: string | null
  price?: string | null
  points?: string[]
  buttonText?: string | null
  buttonLink?: string | null
}

type LandingEntrepreneurship = {
  title?: string | null
  isVisible?: boolean
  items?: LandingEntrepreneurshipItem[]
}

type LandingFooter = {
  logo?: string | null
  addressTitle?: string | null
  addressText?: string | null
  contactTitle?: string | null
  phone?: string | null
  email?: string | null
  isVisible?: boolean
}

type LandingContactSection = {
  title?: string | null
  description?: string | null
  phone?: string | null
  email?: string | null
  address?: string | null
  image?: string | null
  isVisible?: boolean
}

type LandingResponse = {
  news?: LandingNewsCard[]
  reviews?: LandingReviewCard[]
  header?: LandingHeader
  hero?: LandingHero
  introSlider?: LandingIntroSlider
  about?: LandingAbout
  audience?: LandingAudience
  careerGuidance?: LandingCareerGuidance
  cta?: LandingCta
  entrepreneurship?: LandingEntrepreneurship
  footer?: LandingFooter
  contactSection?: LandingContactSection
}

type FrontendNewsCard = {
  id: string
  title: string
  image: string
  excerpt: string
  content: string
  date: string
  isVisible: boolean
}

type FrontendReviewCard = {
  name: string
  avatar: string
  text: string
  date: string
  source: string | null
}

type FrontendHeaderInfo = {
  logo: string
  siteTitle: string
  siteDescription: string
}

type FrontendHeroInfo = {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  image: string
  isVisible: boolean
}
type FrontendBannerSlide = {
  image: string
  href?: string
}
type FrontendAboutInfo = {
  title: string
  text: string
  image: string
  isVisible: boolean
}

type FrontendAudienceCard = {
  title: string
  items: string[]
  buttonText: string
  buttonLink: string
}

type FrontendAudienceInfo = {
  title: string
  isVisible: boolean
  items: FrontendAudienceCard[]
}

type FrontendGuidanceCard = {
  title: string
  price: string
  items: string[]
  buttonText: string
  buttonLink: string
}


type FrontendCareerGuidanceInfo = {
  title: string
  isVisible: boolean
  items: FrontendGuidanceCard[]
}

type FrontendCtaInfo = {
  title: string
  text: string
  buttonText: string
  buttonLink: string
  managerText: string
  managerLink: string
  managerIcon: string
  isVisible: boolean
}
type FrontendEntrepreneurshipCard = {
  title: string
  price: string
  items: string[]
  buttonText: string
  buttonLink: string
}

type FrontendEntrepreneurshipInfo = {
  title: string
  isVisible: boolean
  items: FrontendEntrepreneurshipCard[]
}

type FrontendFooterInfo = {
  logo: string
  addressTitle: string
  addressText: string
  contactTitle: string
  phone: string
  email: string
  isVisible: boolean
}

type FrontendContactSection = {
  title: string
  description: string
  phone: string
  email: string
  address: string
  image: string
  isVisible: boolean
}

function formatLandingDate(date: string | null | undefined) {
  if (!date) return ''

  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return ''

  return new Intl.DateTimeFormat('ru-RU').format(parsed)
}

function normalizeLandingNewsContent(content: unknown, fallback: string) {
  if (typeof content === 'string' && content.trim()) {
    return content
  }

  return fallback
}
function normalizePrice(value: string | null | undefined) {
  const normalized = typeof value === 'string' ? value.trim() : ''

  if (!normalized) {
    return ''
  }

  return /₽|руб\.?/i.test(normalized) ? normalized : `${normalized} ₽`
}
function renderHeroTitle(title: string) {
  const normalizedTitle = title.trim().replace(/\s+/g, ' ')

  if (normalizedTitle === 'ВАШ ПУТЕВОДИТЕЛЬ В МИР КАРЬЕРНЫХ РЕШЕНИЙ') {
    return (
      <>
        <span className="hero-title__muted">ВАШ</span>{' '}
        <span className="hero-title__blue">ПУТЕВОДИТЕЛЬ В МИР</span>{' '}
        <span className="hero-title__muted">КАРЬЕРНЫХ</span>{' '}
        <span className="hero-title__blue">РЕШЕНИЙ</span>
      </>
    )
  }

  const customParts = title
    .split('|')
    .map((part) => part.trim())
    .filter(Boolean)

  if (customParts.length === 4) {
    return (
      <>
        <span className="hero-title__muted">{customParts[0]}</span>{' '}
        <span className="hero-title__blue">{customParts[1]}</span>{' '}
        <span className="hero-title__muted">{customParts[2]}</span>{' '}
        <span className="hero-title__blue">{customParts[3]}</span>
      </>
    )
  }

  return title
}

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
    buttonText: 'Купить',
    buttonLink: '#contact-form',
  },
  {
    title: 'Подростковый профориентационный клуб «ПрофСтарт»',
    price: '4 000 ₽',
    items: [
      'Понимание, откуда берутся деньги и как они работают;',
      'Учатся планировать доходы и расходы;',
      'Разбираются, что такое бюджет, цели, накопления;',
    ],
    buttonText: 'Купить',
    buttonLink: '#contact-form',
  },
  {
    title: 'ПрофТур',
    price: '25 000 ₽',
    items: [
      'Посещают реальные компании и производства;',
      'Знакомятся с разными профессиями «изнутри»;',
      'Общаются с действующими специалистами и руководителями;',
    ],
    buttonText: 'Купить',
    buttonLink: '#contact-form',
  },
  {
    title: 'Подростковый профориентационный клуб «ПрофСтарт+»',
    price: '6 000 ₽',
    items: [
      'Больше практики и работы с личными целями;',
      'Расширенные упражнения по выбору направления;',
      'Поддержка в формировании индивидуального карьерного трека;',
    ],
    buttonText: 'Купить',
    buttonLink: '#contact-form',
  },
  {
    title: 'Подростковый профориентационный клуб «ПрофСтарт Pro»',
    price: '8 000 ₽',
    items: [
      'Углублённая профдиагностика и разбор сильных сторон;',
      'Построение персонального маршрута развития;',
      'Дополнительные встречи и сопровождение по результатам;',
    ],
    buttonText: 'Купить',
    buttonLink: '#contact-form',
  },
]
const guidanceLoopCards = [
  ...guidanceCards.slice(-3),
  ...guidanceCards,
  ...guidanceCards.slice(0, 3),
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
  const [selectedNews, setSelectedNews] = useState<FrontendNewsCard | null>(null)
  const [landingData, setLandingData] = useState<LandingResponse | null>(null)
  const [isLandingDataLoading, setIsLandingDataLoading] = useState(true)
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
  const [contactSubmitState, setContactSubmitState] = useState<{
    type: 'idle' | 'success' | 'error'
    message: string
  }>({
    type: 'idle',
    message: '',
  })
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const autoSlideRef = useRef<number | null>(null)
  const reviewsAutoSlideRef = useRef<number | null>(null)
  const reviewsViewportRef = useRef<HTMLDivElement | null>(null)
  const newsViewportRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const media = window.matchMedia('(max-width: 1040px)')
    const sync = () => setIsReviewsMobile(media.matches)
    sync()

    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1040px)')
    const sync = () => setIsNewsMobile(media.matches)
    sync()

    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
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
  let isMounted = true

  const loadLandingData = async () => {
    try {
      const response = await fetch('/api/public/landing', {
        cache: 'no-store',
      })

      if (!response.ok) {
        throw new Error(`Landing request failed with status ${response.status}`)
      }

      const data: LandingResponse = await response.json()

      if (isMounted) {
        setLandingData(data)
      }
    } catch (error) {
      console.error('Failed to load landing data', error)
    } finally {
      if (isMounted) {
        setIsLandingDataLoading(false)
      }
    }
  }

  loadLandingData()

  return () => {
    isMounted = false
  }
}, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 720px)')
    const sync = () => setIsGuidanceMobile(media.matches)
    sync()

    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
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

  const apiReviewsCards: FrontendReviewCard[] = Array.isArray(landingData?.reviews)
    ? landingData.reviews.map((item) => ({
        name: item.name ?? '',
        avatar: item.avatar ?? '/images/reviews/review_1.jpg',
        text: item.text ?? '',
        date: formatLandingDate(item.date),
        source: item.source ?? null,
      }))
    : []

  const visibleReviewsCards =
  !isLandingDataLoading && apiReviewsCards.length > 0 ? apiReviewsCards : reviewsCards
  const visibleReviewsCount = isReviewsMobile ? 1 : 2
  const maxReviewsIndex = Math.max(visibleReviewsCards.length - visibleReviewsCount, 0)

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

  const apiNewsCards: FrontendNewsCard[] = Array.isArray(landingData?.news)
    ? landingData.news.map((item) => ({
        id: String(item.id),
        title: item.title ?? '',
        image: item.image ?? '/images/news/news_1.jpg',
        excerpt: item.excerpt ?? '',
        content: normalizeLandingNewsContent(item.content, item.excerpt ?? ''),
        date: formatLandingDate(item.publishedAt),
        isVisible: true,
      }))
    : []

  const visibleNewsCards = (
    !isLandingDataLoading && apiNewsCards.length > 0 ? apiNewsCards : newsCards
  ).filter((card) => card.isVisible)

  const resolvedHeaderInfo: FrontendHeaderInfo = {
    logo: landingData?.header?.logo ?? '/logo/logo.png',
    siteTitle: landingData?.header?.siteTitle ?? 'ПрофСтарт',
    siteDescription:
      landingData?.header?.siteDescription ??
      'Центр карьеры, профориентации и предпринимательства для подростков, родителей, молодёжи и начинающих предпринимателей.',
  }

  const resolvedHeroInfo: FrontendHeroInfo = {
    title: landingData?.hero?.title ?? 'ВАШ ПУТЕВОДИТЕЛЬ В МИР КАРЬЕРНЫХ РЕШЕНИЙ',
    subtitle:
      landingData?.hero?.subtitle ??
      'Пространство для подростков, родителей, молодёжи и начинающих предпринимателей.',
    buttonText: landingData?.hero?.buttonText ?? 'Связаться с нами',
    buttonLink: landingData?.hero?.buttonLink ?? '#contact-form',
    image: landingData?.hero?.image ?? '/images/image_1.png',
    isVisible: landingData?.hero?.isVisible ?? true,
  }

  const resolvedBannerSlides: FrontendBannerSlide[] =
  !isLandingDataLoading &&
  Array.isArray(landingData?.introSlider?.slides) &&
  landingData.introSlider.slides.length > 0
    ? landingData.introSlider.slides.map((slide) => ({
        image: slide.image ?? '/images/banners/baner1.png',
        href: slide.link?.trim() || undefined,
      }))
    : bannerSlides
  const bannerSlideCount = resolvedBannerSlides.length
  const resolvedAboutInfo: FrontendAboutInfo = {
    title: landingData?.about?.title ?? 'О нас',
    text:
    landingData?.about?.text ??
    'Сегодня мир меняется быстрее, чем школьные программы, учебники и привычные карьерные сценарии. Профессии появляются и исчезают.\n\nКарьерные пути больше не выглядят как прямая линия «школа — вуз — работа на всю жизнь». А выбор, который раньше делали один раз, теперь приходится пересобирать снова и снова.\n\nИменно в этой реальности появился центр карьеры, профориентации и предпринимательства «Проф Старт».\n\nМы работаем не только с подростками. Мы работаем с людьми и их выбором — в разном возрасте и на разных этапах жизни.',
    image: landingData?.about?.image ?? '/images/image_2.jpg',
    isVisible: landingData?.about?.isVisible ?? true,
  }

  const resolvedAudienceInfo: FrontendAudienceInfo = {
    title: landingData?.audience?.title ?? 'Для кого работает центр ПрофСтарт?',
    isVisible: landingData?.audience?.isVisible ?? true,
    items:
      !isLandingDataLoading && Array.isArray(landingData?.audience?.items) && landingData.audience.items.length > 0
        ? landingData.audience.items.slice(0, 3).map((item) => ({
            title: item.title ?? '',
            items: Array.isArray(item.points) ? item.points.slice(0, 5) : [],
            buttonText: item.buttonText ?? 'Оставить заявку',
            buttonLink: item.buttonLink ?? '#contact-form',
          }))
        : audienceCards.map((item) => ({
            title: item.title,
            items: item.items,
            buttonText: 'Оставить заявку',
            buttonLink: '#contact-form',
          })),
  }

  const resolvedCareerGuidanceInfo: FrontendCareerGuidanceInfo = {
    title: landingData?.careerGuidance?.title ?? 'Профориентация',
    isVisible: landingData?.careerGuidance?.isVisible ?? true,
    items:
      !isLandingDataLoading &&
      Array.isArray(landingData?.careerGuidance?.items) &&
      landingData.careerGuidance.items.length > 0
        ? landingData.careerGuidance.items.slice(0, 20).map((item) => ({
            title: item.title ?? '',
            price: normalizePrice(item.price),
            items: Array.isArray(item.points) ? item.points.slice(0, 6) : [],
            buttonText: item.buttonText ?? 'Купить',
            buttonLink: item.buttonLink ?? '#contact-form',
          }))
        : guidanceCards.map((item) => ({
            title: item.title,
            price: item.price,
            items: item.items,
            buttonText: 'Купить',
            buttonLink: '#contact-form',
          })),
  }

  const resolvedCtaInfo: FrontendCtaInfo = {
    title: landingData?.cta?.title ?? 'Есть вопросы или сложности с выбором?',
    text:
      landingData?.cta?.text ??
      'Оставьте заявку, мы свяжемся с вами, проконсультируем и ответим на все интересующие вас вопросы',
    buttonText: landingData?.cta?.buttonText ?? 'Отправить заявку',
    buttonLink: landingData?.cta?.buttonLink ?? '#contact-form',
    managerText: landingData?.cta?.managerText ?? 'или написать:',
    managerLink: landingData?.cta?.managerLink ?? '#contact-form',
    managerIcon: landingData?.cta?.managerIcon ?? '/images/logo_max.png',
    isVisible: landingData?.cta?.isVisible ?? true,
  }

  const resolvedEntrepreneurshipInfo: FrontendEntrepreneurshipInfo = {
    title: landingData?.entrepreneurship?.title ?? 'Предпринимательство',
    isVisible: landingData?.entrepreneurship?.isVisible ?? true,
    items:
      !isLandingDataLoading &&
      Array.isArray(landingData?.entrepreneurship?.items) &&
      landingData.entrepreneurship.items.length > 0
        ? landingData.entrepreneurship.items.slice(0, 3).map((item) => ({
            title: item.title ?? '',
            price: normalizePrice(item.price),
            items: Array.isArray(item.points) ? item.points.slice(0, 5) : [],
            buttonText: item.buttonText ?? 'Купить',
            buttonLink: item.buttonLink ?? '#contact-form',
          }))
        : [
            {
              title: 'Подготовка и запуск бизнеса',
              price: '25 000 ₽',
              items: [
                'Анализируем и оцениваем бизнес-идею',
                'Изучаем рынок и целевую аудиторию',
                'Рассчитываем стартовые вложения и финансовую модель',
                'Формируем или корректируем бизнес-план',
                'Помогаем определить первые шаги запуска',
              ],
              buttonText: 'Купить',
              buttonLink: '#contact-form',
            },
            {
              title: 'Бизнес-консультации',
              price: '5 000 ₽',
              items: [
                'Тем, кто хочет открыть своё дело, но не знает, с чего начать',
                'Тем, кто планирует получить государственную поддержку',
                'Тем, кто уже работает, но чувствует хаос в финансах или стратегии',
                'Помогаем структурировать действия и первые приоритеты',
              ],
              buttonText: 'Купить',
              buttonLink: '#contact-form',
            },
          ],
  }

  const entrepreneurshipRenderCards: FrontendEntrepreneurshipCard[] = isLandingDataLoading
    ? [
        {
          title: '',
          price: '',
          items: [],
          buttonText: '',
          buttonLink: '',
        },
        {
          title: '',
          price: '',
          items: [],
          buttonText: '',
          buttonLink: '',
        },
      ]
    : resolvedEntrepreneurshipInfo.items

  const resolvedGuidanceLoopCards = isLandingDataLoading
    ? guidanceLoopCards
    : [
        ...resolvedCareerGuidanceInfo.items.slice(-3),
        ...resolvedCareerGuidanceInfo.items,
        ...resolvedCareerGuidanceInfo.items.slice(0, 3),
      ]

useEffect(() => {
  if (bannerSlideCount <= 1) {
    if (autoSlideRef.current !== null) {
      window.clearInterval(autoSlideRef.current)
    }
    return
  }

  const startAutoSlide = () => {
    if (autoSlideRef.current !== null) {
      window.clearInterval(autoSlideRef.current)
    }

    autoSlideRef.current = window.setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % bannerSlideCount)
    }, 4500)
  }

  startAutoSlide()

  return () => {
    if (autoSlideRef.current !== null) {
      window.clearInterval(autoSlideRef.current)
    }
  }
}, [bannerSlideCount])

useEffect(() => {
  setActiveBanner((prev) => (bannerSlideCount > 0 ? Math.min(prev, bannerSlideCount - 1) : 0))
}, [bannerSlideCount])

useEffect(() => {
  if (!isMobileMenuOpen) {
    document.body.style.overflow = ''
    return
  }

  document.body.style.overflow = 'hidden'

  return () => {
    document.body.style.overflow = ''
  }
}, [isMobileMenuOpen])

useEffect(() => {
  const media = window.matchMedia('(min-width: 1041px)')

  const handleDesktop = () => {
    if (media.matches) {
      setIsMobileMenuOpen(false)
    }
  }

  handleDesktop()

  media.addEventListener('change', handleDesktop)
  return () => media.removeEventListener('change', handleDesktop)
}, [])

const closeMobileMenu = () => {
  setIsMobileMenuOpen(false)
}
  const resolvedFooterInfo: FrontendFooterInfo = {
    logo: landingData?.footer?.logo ?? footerInfo.logo,
    addressTitle: landingData?.footer?.addressTitle ?? footerInfo.addressTitle,
    addressText: landingData?.footer?.addressText ?? footerInfo.addressText,
    contactTitle: landingData?.footer?.contactTitle ?? footerInfo.contactTitle,
    phone: landingData?.footer?.phone ?? footerInfo.phone,
    email: landingData?.footer?.email ?? footerInfo.email,
    isVisible: landingData?.footer?.isVisible ?? true,
  }

  const resolvedContactSection: FrontendContactSection = {
    title: landingData?.contactSection?.title ?? 'Связаться с нами',
    description:
      landingData?.contactSection?.description ??
      'Оставьте заявку, мы свяжемся с вами, проконсультируем и ответим на все интересующие вас вопросы',
    phone: landingData?.contactSection?.phone ?? resolvedFooterInfo.phone,
    email: landingData?.contactSection?.email ?? resolvedFooterInfo.email,
    address: landingData?.contactSection?.address ?? resolvedFooterInfo.addressText,
    image: landingData?.contactSection?.image ?? '/images/сontact_as.png',
    isVisible: landingData?.contactSection?.isVisible ?? true,
  }

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

  if (!payload.isPrivacyAccepted) {
    setContactSubmitState({
      type: 'error',
      message: 'Подтвердите согласие на обработку персональных данных.',
    })
    return
  }

  setIsContactSubmitting(true)
  setContactSubmitState({
    type: 'idle',
    message: '',
  })

  try {
    const response = await fetch('/api/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      let errorMessage = 'Не удалось отправить заявку. Попробуйте еще раз.'

      try {
        const errorData = await response.json()
        if (typeof errorData?.message === 'string' && errorData.message.trim()) {
          errorMessage = errorData.message
        }
      } catch {
        // ignore invalid error body
      }

      throw new Error(errorMessage)
    }

    setContactForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      isPrivacyAccepted: false,
      company: '',
    })

    setContactSubmitState({
      type: 'success',
      message: 'Заявка успешно отправлена. Мы скоро с вами свяжемся.',
    })
  } catch (error) {
    setContactSubmitState({
      type: 'error',
      message:
        error instanceof Error && error.message.trim()
          ? error.message
          : 'Не удалось отправить заявку. Попробуйте еще раз.',
    })
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
            <img
              src={resolvedHeaderInfo.logo}
              alt={resolvedHeaderInfo.siteTitle}
              className="site-logo__image"
            />
          </a>

          <nav className="site-nav" aria-label="Основное меню">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="site-nav__link">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'mobile-menu-toggle--open' : ''}`}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-panel"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <div
  className={`mobile-menu-overlay ${isMobileMenuOpen ? 'mobile-menu-overlay--visible' : ''}`}
  onClick={closeMobileMenu}
  aria-hidden={isMobileMenuOpen ? 'false' : 'true'}
/>

<aside
  id="mobile-menu-panel"
  className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}
  aria-hidden={isMobileMenuOpen ? 'false' : 'true'}
>
  <div className="mobile-menu__header">
    <button type="button" className="mobile-menu__back" onClick={closeMobileMenu}>
      <span className="mobile-menu__back-arrow" aria-hidden="true" />
      <span>Назад</span>
    </button>
  </div>

  <nav className="mobile-menu__nav" aria-label="Мобильное меню">
    {mobileMenuItems.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className="mobile-menu__section-link"
        onClick={closeMobileMenu}
      >
        <span className={item.iconClass} aria-hidden="true" />
        <span>{item.label}</span>
      </a>
    ))}
  </nav>

  <a href="#contact-form" className="mobile-menu__contact-button" onClick={closeMobileMenu}>
    Связаться с нами
  </a>
</aside>

      {resolvedHeroInfo.isVisible ? (
      <section id="hero" className="hero-section">
        <div className="container hero-section__grid">
          {isLandingDataLoading ? (
            <>
              <div className="hero-content hero-content--skeleton" aria-hidden="true">
                <div className="hero-title-skeleton">
                  <span className="hero-title-skeleton__line hero-title-skeleton__line--lg" />
                  <span className="hero-title-skeleton__line hero-title-skeleton__line--md" />
                  <span className="hero-title-skeleton__line hero-title-skeleton__line--sm" />
                </div>

                <div className="hero-text-skeleton">
                  <span className="hero-text-skeleton__line" />
                  <span className="hero-text-skeleton__line hero-text-skeleton__line--short" />
                </div>

                <div className="hero-button-skeleton" />
              </div>

              <div className="hero-visual hero-visual--skeleton" aria-hidden="true">
                <div className="hero-visual__image hero-visual__image--skeleton" />
              </div>
            </>
          ) : (
            <>
              <div className="hero-content">
                <h1 className="hero-title">{renderHeroTitle(resolvedHeroInfo.title)}</h1>

                <p className="hero-text">{resolvedHeroInfo.subtitle}</p>

                <div className="hero-actions">
                  <a href={resolvedHeroInfo.buttonLink} className="button button--hero">
                    {resolvedHeroInfo.buttonText}
                  </a>
                </div>
              </div>

              <div className="hero-visual" aria-hidden="true">
                <img
                  src={resolvedHeroInfo.image}
                  alt=""
                  className="hero-visual__image"
                />
              </div>
            </>
          )}
        </div>
      </section>
      ) : null}


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
      {isLandingDataLoading ? (
        <div className="banner-slider__skeleton" aria-hidden="true">
          <div className="banner-slider__skeleton-slide" />
        </div>
      ) : (
        <>
          <div
            className="banner-slider__track"
            style={{
              width: `${bannerSlideCount * 100}%`,
              transform: `translateX(-${activeBanner * (100 / bannerSlideCount)}%)`,
            }}
          >
            {resolvedBannerSlides.map((slide, index) => {
              const slideContent = (
                <img src={slide.image} alt={`Баннер ${index + 1}`} />
              )

              return slide.href ? (
                <a
                  key={`${slide.image}-${index}`}
                  href={slide.href}
                  className="banner-slider__slide banner-slider__slide--link"
                  style={{ flex: `0 0 ${100 / bannerSlideCount}%`, width: `${100 / bannerSlideCount}%` }}
                >
                  {slideContent}
                </a>
              ) : (
                <div
                  key={`${slide.image}-${index}`}
                  className="banner-slider__slide"
                  style={{ flex: `0 0 ${100 / bannerSlideCount}%`, width: `${100 / bannerSlideCount}%` }}
                >
                  {slideContent}
                </div>
              )
            })}
          </div>

          <div className="banner-slider__dots">
            {resolvedBannerSlides.map((slide, index) => (
              <button
                key={`${slide.image}-${index}`}
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
                    setActiveBanner((prev) => (prev + 1) % bannerSlideCount)
                  }, 4500)
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  </div>
</section>

{resolvedAboutInfo.isVisible ? (
  <section id="about" className="about-section">
    <div className="container about-block">
      {isLandingDataLoading ? (
        <>
          <div className="about-block__media about-block__media--skeleton" aria-hidden="true">
            <div className="about-block__image-wrap about-block__image-wrap--skeleton" />
          </div>

          <div className="about-block__content about-block__content--skeleton" aria-hidden="true">
            <div className="about-block__heading">
              <div className="about-block__title-skeleton" />
            </div>

            <div className="about-block__text-skeleton">
              <span />
              <span />
              <span className="about-block__text-skeleton-short" />
              <span />
              <span />
              <span className="about-block__text-skeleton-short" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="about-block__media" aria-hidden="true">
            <div className="about-block__image-wrap">
              <img
                src={resolvedAboutInfo.image}
                alt={resolvedAboutInfo.title}
                className="about-block__image"
              />
            </div>
          </div>

          <div className="about-block__content">
            <div className="about-block__heading">
              <h2 className="about-block__title">{resolvedAboutInfo.title}</h2>
            </div>

            <div className="about-block__text">
              {resolvedAboutInfo.text
                .split('\n')
                .map((paragraph) => paragraph.trim())
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p key={`${resolvedAboutInfo.title}-${index}`}>{paragraph}</p>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  </section>
) : null}

      {resolvedAudienceInfo.isVisible ? (
      <section className="audience-section">
        <div className="container">
          <h2 className="audience-section__title">{resolvedAudienceInfo.title}</h2>

          <div className="audience-grid">
            {isLandingDataLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <article key={`audience-skeleton-${index}`} className="audience-card audience-card--skeleton" aria-hidden="true">
                    <div className="audience-card__head">
                      <div className="audience-card__head-title-skeleton" />
                    </div>

                    <div className="audience-card__body">
                      <div className="audience-card__list-skeleton">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span className="audience-card__list-skeleton-short" />
                      </div>

                      <div className="audience-card__button-skeleton" />
                    </div>
                  </article>
                ))
              : resolvedAudienceInfo.items.map((card) => (
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

                      <a href={card.buttonLink} className="button button--audience">
                        {card.buttonText}
                      </a>
                    </div>
                  </article>
                ))}
          </div>
        </div>
      </section>
      ) : null}

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
      {resolvedCareerGuidanceInfo.isVisible ? (
        <section id="guidance" className="guidance-section">
        <div className="container">
          <h2 className="guidance-section__title">{resolvedCareerGuidanceInfo.title}</h2>

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
              {resolvedGuidanceLoopCards.map((card, index) => (
                <article
                  key={`${card.title}-${index}`}
                  className={`guidance-card ${
                    index === (isGuidanceMobile ? guidanceIndex : guidanceIndex + 1)
                      ? 'guidance-card--featured'
                      : ''
                  } ${
                    !isGuidanceCardVisible(index) ? 'guidance-card--hidden' : ''
                  } ${isLandingDataLoading ? 'guidance-card--skeleton' : ''}`}
                >
                <div className="guidance-card__head">
                  {isLandingDataLoading ? (
                    <div className="guidance-card__title-skeleton" aria-hidden="true" />
                  ) : (
                    <h3 className="guidance-card__title">{card.title}</h3>
                  )}
                </div>

                <div className="guidance-card__body">
                  {isLandingDataLoading ? (
                    <>
                      <div className="guidance-card__price-skeleton" aria-hidden="true" />

                      <div className="guidance-card__list-skeleton" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span className="guidance-card__list-skeleton-short" />
                      </div>

                      <div className="guidance-card__button-skeleton" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <p className="guidance-card__price">{card.price}</p>

                      <ul className="guidance-card__list">
                        {card.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <a href={card.buttonLink} className="button button--guidance">
                        {card.buttonText}
                      </a>
                    </>
                  )}
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
) : null}
      {resolvedCtaInfo.isVisible ? (
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

            {isLandingDataLoading ? (
              <>
                <div className="question-cta__content question-cta__content--skeleton" aria-hidden="true">
                  <div className="question-cta__title-skeleton" />
                  <div className="question-cta__text-skeleton">
                    <span />
                    <span className="question-cta__text-skeleton-short" />
                  </div>
                </div>

                <div className="question-cta__actions question-cta__actions--skeleton" aria-hidden="true">
                  <div className="question-cta__button-skeleton" />

                  <div className="question-cta__manager-skeleton">
                    <div className="question-cta__manager-label-skeleton" />
                    <div className="question-cta__manager-icon-skeleton" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="question-cta__content">
                  <h2 className="question-cta__title">{resolvedCtaInfo.title}</h2>

                  <p className="question-cta__text">{resolvedCtaInfo.text}</p>
                </div>

                <div className="question-cta__actions">
                  <a href={resolvedCtaInfo.buttonLink} className="question-cta__button">
                    {resolvedCtaInfo.buttonText}
                  </a>

                  <div className="question-cta__manager">
                    <span className="question-cta__manager-label">{resolvedCtaInfo.managerText}</span>
                    <a
                      href={resolvedCtaInfo.managerLink}
                      className="question-cta__manager-link"
                      aria-label="Написать менеджеру"
                      target={resolvedCtaInfo.managerLink.startsWith('http') ? '_blank' : undefined}
                      rel={resolvedCtaInfo.managerLink.startsWith('http') ? 'noreferrer noopener' : undefined}
                    >
                      <img
                        src={resolvedCtaInfo.managerIcon}
                        alt="Менеджер"
                        className="question-cta__manager-logo"
                      />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      ) : null}

      {resolvedEntrepreneurshipInfo.isVisible ? (
  <section id="entrepreneurship" className="entrepreneurship-section">
    <div
      className="section-side-decor section-side-decor--entrepreneurship-left"
      aria-hidden="true"
    />

    <div className="container">
      <h2 className="entrepreneurship-section__title">{resolvedEntrepreneurshipInfo.title}</h2>

      <div className="entrepreneurship-grid">
        {entrepreneurshipRenderCards.map((card, index) => (
          <article
            key={isLandingDataLoading ? `entrepreneurship-skeleton-${index}` : `${card.title}-${index}`}
            className={`entrepreneurship-card ${
              !isLandingDataLoading && index === 1 ? '' : ''
            } ${isLandingDataLoading ? 'entrepreneurship-card--skeleton' : ''}`}
            aria-hidden={isLandingDataLoading ? 'true' : undefined}
          >
            <div className="entrepreneurship-card__head">
              {isLandingDataLoading ? (
                <div className="entrepreneurship-card__title-skeleton" />
              ) : (
                <h3 className="entrepreneurship-card__title">{card.title}</h3>
              )}
            </div>

            <div className="entrepreneurship-card__body">
              {isLandingDataLoading ? (
                <>
                  <div className="entrepreneurship-card__price-skeleton" />

                  <div className="entrepreneurship-card__list-skeleton">
                    <span />
                    <span />
                    <span />
                    <span className="entrepreneurship-card__list-skeleton-short" />
                  </div>

                  <div className="entrepreneurship-card__button-skeleton" />
                </>
              ) : (
                <>
                  <p className="entrepreneurship-card__price">{card.price}</p>

                  <ul className="entrepreneurship-card__list">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <a href={card.buttonLink} className="button button--entrepreneurship">
                    {card.buttonText}
                  </a>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
) : null}

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
                  {isLandingDataLoading
  ? Array.from({ length: isReviewsMobile ? 1 : 2 }).map((_, index) => (
      <article
        key={`review-skeleton-${index}`}
        className="review-card review-card--skeleton"
        style={{
          flex: isReviewsMobile ? '0 0 100%' : '0 0 calc((100% - 18px) / 2)',
        }}
        aria-hidden="true"
      >
        <div className="review-card__head">
          <div className="review-card__avatar-wrap review-card__avatar-wrap--skeleton" />
          <div className="review-card__name-skeleton" />
        </div>

        <div className="review-card__text-skeleton">
          <span />
          <span />
          <span className="review-card__text-skeleton-short" />
        </div>

        <div className="review-card__footer review-card__footer--skeleton">
          <span className="review-card__source-skeleton" />
          <span className="review-card__date-skeleton" />
        </div>
      </article>
    ))
  : visibleReviewsCards.map((review) => (
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
                  {isLandingDataLoading
  ? Array.from({ length: isNewsMobile ? 1 : 3 }).map((_, index) => (
      <article
        key={`news-skeleton-${index}`}
        className="news-card news-card--skeleton"
        style={{
          flex: isNewsMobile
            ? '0 0 100%'
            : '0 0 calc((100% - 36px) / 3)',
        }}
        aria-hidden="true"
      >
        <div className="news-card__inner">
          <div className="news-card__image-wrap news-card__image-wrap--skeleton" />

          <div className="news-card__body news-card__body--skeleton">
            <span />
            <span />
            <span className="news-card__body-skeleton-short" />
          </div>
        </div>
      </article>
    ))
  : visibleNewsCards.map((news) => (
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

      {resolvedContactSection.isVisible ? (
      <section id="contact-form" className="contact-section">
  <div className="section-side-decor section-side-decor--contact-right" aria-hidden="true" />

  <div className="container">
    <div className="contact-section__grid">
      <div className="contact-section__visual">
        <h2 className="contact-section__title">{resolvedContactSection.title}</h2>

        <div className="contact-section__image-wrap" aria-hidden="true">
          <img
            src={resolvedContactSection.image}
            alt="Контакты"
            className="contact-section__image"
          />
        </div>
      </div>

      <div className="contact-section__content">
        <p className="contact-section__lead">{resolvedContactSection.description}</p>

        <form className="contact-form" onSubmit={handleContactSubmit} noValidate>
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

          {contactSubmitState.type !== 'idle' ? (
            <p
              className={`contact-form__status contact-form__status--${contactSubmitState.type}`}
              role={contactSubmitState.type === 'error' ? 'alert' : 'status'}
            >
              {contactSubmitState.message}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  </div>
</section>
      ) : null}
      {resolvedFooterInfo.isVisible ? (
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <a href="#hero" className="site-footer__logo" aria-label="ПрофСтарт — наверх страницы">
            <img src={resolvedFooterInfo.logo} alt="ПрофСтарт" className="site-footer__logo-image" />
          </a>

          <div className="site-footer__info">
            <div className="site-footer__column">
              <p className="site-footer__label">{resolvedFooterInfo.addressTitle}</p>
              <p className="site-footer__text">{resolvedFooterInfo.addressText}</p>
            </div>

            <div className="site-footer__column">
              <p className="site-footer__label">{resolvedFooterInfo.contactTitle}</p>
              <a
                href={`tel:${resolvedFooterInfo.phone.replace(/[^\d+]/g, '')}`}
                className="site-footer__link"
              >
                {resolvedFooterInfo.phone}
              </a>
              <a
                href={`mailto:${resolvedFooterInfo.email}`}
                className="site-footer__link"
              >
                {resolvedFooterInfo.email}
              </a>
            </div>
          </div>
        </div>
      </footer>
      ) : null}
      <button
  type="button"
  className={`back-to-top ${isBackToTopVisible ? 'back-to-top--visible' : ''}`}
  aria-label="Наверх"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
/>
    </main>
  )
}
