'use client'
import { useEffect, useRef, useState } from 'react'

const navItems = [
  { href: '#about', label: 'О центре' },
  { href: '#guidance', label: 'Профориентация' },
  { href: '#entrepreneurship', label: 'Предпринимательство' },
  { href: '#consultations', label: 'Консультация' },
  { href: '#news', label: 'Новости' },
]

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
  const autoSlideRef = useRef<number | null>(null)

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

      <section id="contact-form" className="section-stub">
        <div className="container">
          <h2>Следующие секции в разработке</h2>
        </div>
      </section>
    </main>
  )
}