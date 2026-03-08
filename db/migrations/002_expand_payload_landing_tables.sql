-- 002_expand_payload_landing_tables.sql
-- Расширяем существующие payload-таблицы под логику лендинга,
-- не создавая дублирующие сущности.

BEGIN;

-- ------------------------------------------------------------
-- NEWS
-- ------------------------------------------------------------
-- Добавляем ручную сортировку для блока новостей
ALTER TABLE IF EXISTS news
ADD COLUMN IF NOT EXISTS sort_order NUMERIC DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_news_is_published_sort_order
  ON news (is_published, sort_order);

-- ------------------------------------------------------------
-- FOOTER
-- ------------------------------------------------------------
-- Расширяем footer под наш кастомный блок подвала
ALTER TABLE IF EXISTS footer
ADD COLUMN IF NOT EXISTS address_title VARCHAR(255),
ADD COLUMN IF NOT EXISTS address_text TEXT,
ADD COLUMN IF NOT EXISTS contact_title VARCHAR(255),
ADD COLUMN IF NOT EXISTS phone VARCHAR(100),
ADD COLUMN IF NOT EXISTS email VARCHAR(255),
ADD COLUMN IF NOT EXISTS is_visible BOOLEAN DEFAULT TRUE;

-- Если footer пустой, создаем стартовую запись
INSERT INTO footer (
  address_title,
  address_text,
  contact_title,
  phone,
  email,
  is_visible,
  created_at,
  updated_at
)
SELECT
  'Адрес',
  'г. Югорск ул. 40 лет Победы, 11 А',
  'Пишите/Звоните',
  '+7 (922) 259-84-47',
  'proforientaciy86',
  TRUE,
  NOW(),
  NOW()
WHERE NOT EXISTS (SELECT 1 FROM footer);

-- Для уже существующих записей можно подставить дефолтные значения, если поля пустые
UPDATE footer
SET
  address_title = COALESCE(address_title, 'Адрес'),
  address_text = COALESCE(address_text, 'г. Югорск ул. 40 лет Победы, 11 А'),
  contact_title = COALESCE(contact_title, 'Пишите/Звоните'),
  phone = COALESCE(phone, '+7 (922) 259-84-47'),
  email = COALESCE(email, 'proforientaciy86'),
  is_visible = COALESCE(is_visible, TRUE)
WHERE
  address_title IS NULL
  OR address_text IS NULL
  OR contact_title IS NULL
  OR phone IS NULL
  OR email IS NULL
  OR is_visible IS NULL;

-- ------------------------------------------------------------
-- CONTACT SETTINGS
-- ------------------------------------------------------------
-- Расширяем contact_settings под блок "Связаться с нами"
ALTER TABLE IF EXISTS contact_settings
ADD COLUMN IF NOT EXISTS title VARCHAR(255),
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS image_id INTEGER,
ADD COLUMN IF NOT EXISTS is_visible BOOLEAN DEFAULT TRUE;

-- Если contact_settings пустая, создаем стартовую запись
INSERT INTO contact_settings (
  title,
  description,
  phone,
  email,
  address,
  is_visible,
  created_at,
  updated_at
)
SELECT
  'Связаться с нами',
  'Оставьте заявку, мы свяжемся с вами, проконсультируем и ответим на все интересующие вас вопросы',
  '+7 (922) 259-84-47',
  'proforientaciy86',
  'г. Югорск ул. 40 лет Победы, 11 А',
  TRUE,
  NOW(),
  NOW()
WHERE NOT EXISTS (SELECT 1 FROM contact_settings);

-- Для уже существующих записей подставим дефолты в новые поля
UPDATE contact_settings
SET
  title = COALESCE(title, 'Связаться с нами'),
  description = COALESCE(
    description,
    'Оставьте заявку, мы свяжемся с вами, проконсультируем и ответим на все интересующие вас вопросы'
  ),
  is_visible = COALESCE(is_visible, TRUE)
WHERE
  title IS NULL
  OR description IS NULL
  OR is_visible IS NULL;

-- Добавляем FK на media только если его еще нет
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'contact_settings_image_id_media_id_fk'
  ) THEN
    ALTER TABLE contact_settings
    ADD CONSTRAINT contact_settings_image_id_media_id_fk
    FOREIGN KEY (image_id) REFERENCES media(id) ON DELETE SET NULL;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_contact_settings_image_id
  ON contact_settings (image_id);

COMMIT;