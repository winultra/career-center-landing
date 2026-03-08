CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE IF NOT EXISTS news (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    date DATE NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0,
    is_visible BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_news_visible_sort
    ON news (is_visible, sort_order);

CREATE TABLE IF NOT EXISTS reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    avatar TEXT,
    text TEXT NOT NULL,
    date DATE NOT NULL,
    source VARCHAR(100),
    sort_order INTEGER NOT NULL DEFAULT 0,
    is_visible BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_reviews_visible_sort
    ON reviews (is_visible, sort_order);

CREATE TABLE IF NOT EXISTS footer_settings (
    id BOOLEAN PRIMARY KEY DEFAULT TRUE CHECK (id = TRUE),
    logo TEXT,
    address_title VARCHAR(255) NOT NULL,
    address_text TEXT NOT NULL,
    contact_title VARCHAR(255) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    is_visible BOOLEAN NOT NULL DEFAULT TRUE,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_section (
    id BOOLEAN PRIMARY KEY DEFAULT TRUE CHECK (id = TRUE),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image TEXT,
    is_visible BOOLEAN NOT NULL DEFAULT TRUE,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS trg_news_updated_at ON news;
CREATE TRIGGER trg_news_updated_at
BEFORE UPDATE ON news
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_reviews_updated_at ON reviews;
CREATE TRIGGER trg_reviews_updated_at
BEFORE UPDATE ON reviews
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_footer_settings_updated_at ON footer_settings;
CREATE TRIGGER trg_footer_settings_updated_at
BEFORE UPDATE ON footer_settings
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_contact_section_updated_at ON contact_section;
CREATE TRIGGER trg_contact_section_updated_at
BEFORE UPDATE ON contact_section
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

INSERT INTO footer_settings (
    id,
    logo,
    address_title,
    address_text,
    contact_title,
    phone,
    email,
    is_visible
) VALUES (
    TRUE,
    '/logo/footer-logo.png',
    'Адрес',
    'г. Югорск ул. 40 лет Победы, 11 А',
    'Пишите/Звоните',
    '+7 (922) 259-84-47',
    'proforientaciy86',
    TRUE
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO contact_section (
    id,
    title,
    description,
    image,
    is_visible
) VALUES (
    TRUE,
    'Связаться с нами',
    'Оставьте заявку, мы свяжемся с вами, проконсультируем и ответим на все интересующие вас вопросы',
    '/images/сontact_as.png',
    TRUE
)
ON CONFLICT (id) DO NOTHING;