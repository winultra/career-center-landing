const tiles = [
  {
    title: 'Профориентация',
    text: 'Помогаем выбрать направление развития, понять сильные стороны и наметить следующий шаг.',
  },
  {
    title: 'Консультации',
    text: 'Проводим индивидуальные консультации по развитию, обучению и карьерной траектории.',
  },
  {
    title: 'Предпринимательство',
    text: 'Поддерживаем тех, кто хочет запустить свое дело или развивать предпринимательские навыки.',
  },
]

const introSlides = [
  'Индивидуальный подход к каждому запросу',
  'Современные инструменты диагностики и сопровождения',
  'Практическая помощь для школьников, студентов и взрослых',
]

const audienceCards = [
  'Школьники и абитуриенты',
  'Студенты и молодые специалисты',
  'Родители и законные представители',
]

const consultations = [
  {
    title: 'Индивидуальная консультация',
    price: 'от 3 500 ₽',
    description: 'Разбор текущей ситуации, целей и возможных направлений развития.',
  },
  {
    title: 'Семейная консультация',
    price: 'от 5 000 ₽',
    description: 'Совместная встреча с родителями для выработки понятного плана действий.',
  },
  {
    title: 'Расширенная диагностика',
    price: 'от 7 500 ₽',
    description: 'Углубленный анализ интересов, мотивации и профессиональных склонностей.',
  },
]

const guidanceCards = [
  {
    title: 'Базовый пакет',
    price: 'от 9 900 ₽',
    includes: 'Первичная встреча, тестирование, рекомендации и дорожная карта.',
  },
  {
    title: 'Стандартный пакет',
    price: 'от 14 900 ₽',
    includes: 'Диагностика, консультация, разбор профессий и сопровождение по вопросам выбора.',
  },
  {
    title: 'Расширенный пакет',
    price: 'от 19 900 ₽',
    includes: 'Полный разбор, рекомендации, план развития, сопровождение и дополнительные встречи.',
  },
]

const entrepreneurshipCards = [
  {
    title: 'Стартап-мышление',
    description: 'Развиваем навыки инициативности, коммуникации и проектного подхода.',
  },
  {
    title: 'Первые шаги в бизнесе',
    description: 'Помогаем понять, как оформлять идеи, считать ресурсы и тестировать гипотезы.',
  },
  {
    title: 'Личный план роста',
    description: 'Формируем понятный маршрут развития и дальнейших действий.',
  },
]

const reviews = [
  {
    name: 'Анна',
    source: 'Москва',
    text: 'Очень бережный подход и понятные рекомендации. После консультации стало гораздо проще двигаться дальше.',
  },
  {
    name: 'Илья',
    source: 'без указания города',
    text: 'Понравилась структура работы и то, что все рекомендации были применимы на практике.',
  },
  {
    name: 'Марина',
    source: 'Казань',
    text: 'Получили понятный план действий и уверенность, что движемся в правильном направлении.',
  },
]

const news = [
  {
    title: 'Как выбрать направление развития без стресса',
    text: 'Короткий материал о том, как подойти к выбору профессии спокойно и системно.',
  },
  {
    title: 'Почему важно учитывать сильные стороны',
    text: 'Разбираем, почему опора на свои качества помогает быстрее принимать решения.',
  },
  {
    title: 'С чего начать карьерное планирование',
    text: 'Простой чек-лист, который помогает сделать первый шаг.',
  },
]

const navItems = [
  { href: '#hero', label: 'Главная' },
  { href: '#about', label: 'О нас' },
  { href: '#consultations', label: 'Консультации' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#news', label: 'Новости' },
  { href: '#contact-form', label: 'Контакты' },
]

export default function HomePage() {
  return (
    <main className="landing-page">
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="site-logo" href="#hero">
            Career Center
          </a>

          <nav className="site-nav" aria-label="Основное меню">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="site-nav__link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact-form" className="button button--primary site-header__button">
            Оставить заявку
          </a>
        </div>
      </header>

      <section id="hero" className="hero-section section">
        <div className="container hero-section__grid">
          <div className="hero-section__content">
            <span className="eyebrow">Карьерный центр</span>
            <h1 className="section-title hero-section__title">
              Помогаем выбрать направление, увидеть возможности и двигаться дальше уверенно
            </h1>
            <p className="section-text hero-section__text">
              Центр профориентации, консультаций и развития. Работаем с подростками, студентами,
              родителями и взрослыми, которые хотят осознанно выстроить следующий шаг.
            </p>
            <div className="hero-section__actions">
              <a href="#contact-form" className="button button--primary">
                Оставить заявку
              </a>
              <a href="#about" className="button button--secondary">
                Узнать подробнее
              </a>
            </div>
          </div>

          <div className="hero-section__visual" aria-hidden="true">
            <div className="hero-section__visual-card">
              <span className="hero-section__visual-label">Здесь будет визуал из макета</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-grid cards-grid--three">
            {tiles.map((item) => (
              <article key={item.title} className="content-card content-card--tile">
                <h2 className="card-title">{item.title}</h2>
                <p className="section-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Слайдер</span>
            <h2 className="section-title">Основные направления работы центра</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            {introSlides.map((item) => (
              <article key={item} className="content-card content-card--slider">
                <h3 className="card-title">{item}</h3>
                <p className="section-text">На следующем шаге подключим сюда реальные слайды из CMS.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container two-column-section">
          <div>
            <span className="eyebrow">О нас</span>
            <h2 className="section-title">Помогаем выстраивать понятную траекторию развития</h2>
            <p className="section-text">
              Мы объединяем консультационный подход, современные диагностические инструменты и
              практические рекомендации, которые можно применять сразу после встречи.
            </p>
            <p className="section-text">
              На этом этапе мы делаем чистую адаптивную основу страницы, а затем натянем на нее
              реальные тексты, изображения и управляемый контент из CMS.
            </p>
          </div>
          <div className="image-placeholder">Изображение блока «О нас»</div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Для кого</span>
            <h2 className="section-title">Для кого работает центр</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            {audienceCards.map((item) => (
              <article key={item} className="content-card">
                <h3 className="card-title">{item}</h3>
                <p className="section-text">
                  Подготовим блок с текстом из админки и кнопкой для перехода к заявке.
                </p>
                <a href="#contact-form" className="button button--secondary button--full">
                  Оставить заявку
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="consultations" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Консультации</span>
            <h2 className="section-title">Форматы работы</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            {consultations.map((item) => (
              <article key={item.title} className="content-card pricing-card">
                <div className="pricing-card__top">
                  <h3 className="card-title">{item.title}</h3>
                  <span className="price-badge">{item.price}</span>
                </div>
                <p className="section-text">{item.description}</p>
                <a href="#contact-form" className="button button--primary button--full">
                  Оставить заявку
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Профориентация</span>
            <h2 className="section-title">Пакеты сопровождения</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            {guidanceCards.map((item) => (
              <article key={item.title} className="content-card pricing-card">
                <div className="pricing-card__top">
                  <h3 className="card-title">{item.title}</h3>
                  <span className="price-badge">{item.price}</span>
                </div>
                <p className="section-text">{item.includes}</p>
                <a href="#contact-form" className="button button--primary button--full">
                  Купить
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-banner">
          <div>
            <span className="eyebrow">Связаться с нами</span>
            <h2 className="section-title">Готовы обсудить ваш запрос и предложить подходящий формат</h2>
            <p className="section-text">
              Пока ведем кнопки на нижнюю форму, а popup подключим следующим шагом.
            </p>
          </div>
          <div className="cta-banner__actions">
            <a href="#contact-form" className="button button--primary">
              Оставить заявку
            </a>
            <a href="#contact-form" className="button button--secondary">
              Написать в MAX
            </a>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Предпринимательство</span>
            <h2 className="section-title">Развитие предпринимательских навыков</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            {entrepreneurshipCards.map((item) => (
              <article key={item.title} className="content-card">
                <h3 className="card-title">{item.title}</h3>
                <p className="section-text">{item.description}</p>
                <a href="#contact-form" className="button button--secondary button--full">
                  Оставить заявку
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Отзывы</span>
            <h2 className="section-title">Что говорят о центре</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            {reviews.map((item) => (
              <article key={item.name + item.source} className="content-card review-card">
                <p className="section-text review-card__text">“{item.text}”</p>
                <div className="review-card__footer">
                  <strong>{item.name}</strong>
                  <span>{item.source}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="section section--muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Новости</span>
            <h2 className="section-title">Последние материалы</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            {news.map((item) => (
              <article key={item.title} className="content-card news-card">
                <div className="news-card__image">Превью новости</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="section-text">{item.text}</p>
                <a href="#contact-form" className="button button--secondary button--full">
                  Читать подробнее
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="section">
        <div className="container contact-section">
          <div>
            <span className="eyebrow">Контакты</span>
            <h2 className="section-title">Связаться с нами</h2>
            <p className="section-text">
              Ниже размещаем визуальную форму. Интеграцию с реальным API и popup вернем следующим
              этапом.
            </p>
            <div className="contact-info">
              <div>
                <strong>Телефон</strong>
                <span>+7 (000) 000-00-00</span>
              </div>
              <div>
                <strong>Email</strong>
                <span>info@example.com</span>
              </div>
              <div>
                <strong>MAX</strong>
                <span>@careercenter</span>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-grid">
              <label className="form-field">
                <span>Имя</span>
                <input type="text" placeholder="Введите имя" />
              </label>
              <label className="form-field">
                <span>Фамилия</span>
                <input type="text" placeholder="Введите фамилию" />
              </label>
              <label className="form-field">
                <span>Email</span>
                <input type="email" placeholder="Введите email" />
              </label>
              <label className="form-field">
                <span>Телефон</span>
                <input type="tel" placeholder="Введите телефон" />
              </label>
            </div>
            <label className="form-field">
              <span>Комментарий</span>
              <textarea rows={5} placeholder="Опишите ваш запрос" />
            </label>
            <label className="form-checkbox">
              <input type="checkbox" />
              <span>Я согласен на обработку персональных данных</span>
            </label>
            <button type="submit" className="button button--primary button--full">
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <a className="site-logo" href="#hero">
            Career Center
          </a>
          <p className="site-footer__text">
            Адаптивная основа лендинга. Следующим шагом натягиваем реальный дизайн и данные из CMS.
          </p>
        </div>
      </footer>
    </main>
  )
}