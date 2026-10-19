CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  role varchar DEFAULT 'editor',
  email varchar NOT NULL UNIQUE,
  reset_password_token varchar,
  reset_password_expiration timestamptz,
  salt varchar,
  hash varchar,
  login_attempts numeric DEFAULT 0,
  lock_until timestamptz,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS users_sessions (
  id varchar PRIMARY KEY,
  _order integer NOT NULL,
  _parent_id integer NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at timestamptz,
  expires_at timestamptz
);

CREATE INDEX IF NOT EXISTS users_sessions_parent_idx ON users_sessions(_parent_id);

CREATE TABLE IF NOT EXISTS media (
  id SERIAL PRIMARY KEY,
  alt varchar,
  filename varchar,
  mime_type varchar,
  filesize numeric,
  width numeric,
  height numeric,
  focal_x numeric,
  focal_y numeric,
  url varchar,
  thumbnail_u_r_l varchar,
  sizes_news_cover_url varchar,
  sizes_news_cover_width numeric,
  sizes_news_cover_height numeric,
  sizes_news_cover_mime_type varchar,
  sizes_news_cover_filesize numeric,
  sizes_news_cover_filename varchar,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS news (
  id SERIAL PRIMARY KEY,
  title varchar NOT NULL,
  slug varchar NOT NULL UNIQUE,
  excerpt text,
  content jsonb,
  cover_image_id integer REFERENCES media(id) ON DELETE SET NULL,
  published_at timestamptz,
  is_published boolean DEFAULT true,
  sort_order numeric DEFAULT 0,
  seo_title varchar,
  seo_description text,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS news_cover_image_idx ON news(cover_image_id);

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  source_name varchar,
  avatar_id integer REFERENCES media(id) ON DELETE SET NULL,
  text text NOT NULL,
  date timestamptz,
  sort_order numeric DEFAULT 0,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS reviews_avatar_idx ON reviews(avatar_id);

CREATE TABLE IF NOT EXISTS applications (
  id SERIAL PRIMARY KEY,
  first_name varchar NOT NULL,
  last_name varchar NOT NULL,
  full_name varchar,
  email varchar NOT NULL,
  phone varchar NOT NULL,
  message text NOT NULL,
  source_block varchar,
  is_privacy_accepted boolean DEFAULT false,
  status varchar DEFAULT 'new',
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS header (
  id SERIAL PRIMARY KEY,
  logo_id integer REFERENCES media(id) ON DELETE SET NULL,
  site_title varchar DEFAULT 'ПрофСтарт',
  site_description text,
  button_text varchar DEFAULT 'Оставить заявку',
  button_link varchar DEFAULT '#contact-form',
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS footer (
  id SERIAL PRIMARY KEY,
  logo_id integer REFERENCES media(id) ON DELETE SET NULL,
  address_title varchar DEFAULT 'Адрес',
  address_text text DEFAULT 'г. Югорск ул. 40 лет Победы, 11 А',
  address_link varchar,
  contact_title varchar DEFAULT 'Пишите/Звоните',
  phone varchar DEFAULT '+7 (922) 259-84-47',
  email varchar DEFAULT 'proforientaciy86',
  is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS contact_settings (
  id SERIAL PRIMARY KEY,
  title varchar DEFAULT 'Связаться с нами',
  description text,
  image_id integer REFERENCES media(id) ON DELETE SET NULL,
  phone varchar,
  email varchar,
  address varchar,
  is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS seo_settings (
  id SERIAL PRIMARY KEY,
  default_title varchar,
  default_description text,
  og_image_id integer REFERENCES media(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS home_page (
  id SERIAL PRIMARY KEY,
  hero_title varchar,
  hero_subtitle text,
  hero_button_text varchar DEFAULT 'Оставить заявку',
  hero_button_link varchar DEFAULT '#contact-form',
  hero_image_id integer REFERENCES media(id) ON DELETE SET NULL,
  hero_is_visible boolean DEFAULT true,
  intro_slider_title varchar,
  intro_slider_is_visible boolean DEFAULT true,
  about_title varchar,
  about_text text,
  about_image_id integer REFERENCES media(id) ON DELETE SET NULL,
  about_is_visible boolean DEFAULT true,
  audience_title varchar,
  audience_is_visible boolean DEFAULT true,
  consultations_title varchar DEFAULT 'Консультации',
  consultations_is_visible boolean DEFAULT true,
  consultations_left_card_title varchar,
  consultations_left_card_button_text varchar DEFAULT 'Купить',
  consultations_left_card_button_link varchar DEFAULT '#contact-form',
  consultations_right_card_title varchar,
  consultations_right_card_button_text varchar DEFAULT 'Купить',
  consultations_right_card_button_link varchar DEFAULT '#contact-form',
  career_guidance_title varchar,
  career_guidance_is_visible boolean DEFAULT true,
  cta_title varchar,
  cta_text text,
  cta_button_text varchar DEFAULT 'Оставить заявку',
  cta_button_link varchar DEFAULT '#contact-form',
  cta_manager_text varchar DEFAULT 'или написать:',
  cta_manager_link varchar DEFAULT '#contact-form',
  cta_manager_icon_id integer REFERENCES media(id) ON DELETE SET NULL,
  cta_is_visible boolean DEFAULT true,
  entrepreneurship_title varchar,
  entrepreneurship_is_visible boolean DEFAULT true,
  reviews_section_title varchar DEFAULT 'Отзывы',
  reviews_section_subtitle text,
  reviews_section_is_visible boolean DEFAULT true,
  news_section_title varchar DEFAULT 'Новости',
  news_section_subtitle text,
  news_section_is_visible boolean DEFAULT true,
  contact_section_title varchar DEFAULT 'Связаться с нами',
  contact_section_subtitle text,
  contact_section_form_title varchar DEFAULT 'Оставить заявку',
  contact_section_submit_button_text varchar DEFAULT 'Отправить',
  contact_section_is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS home_page_intro_slider_slides (
  id varchar PRIMARY KEY,
  _order integer NOT NULL,
  _parent_id integer NOT NULL REFERENCES home_page(id) ON DELETE CASCADE,
  title varchar NOT NULL,
  text text,
  image_id integer REFERENCES media(id) ON DELETE SET NULL,
  link varchar
);

CREATE INDEX IF NOT EXISTS home_page_intro_slider_slides_parent_idx ON home_page_intro_slider_slides(_parent_id);
CREATE INDEX IF NOT EXISTS home_page_intro_slider_slides_image_idx ON home_page_intro_slider_slides(image_id);

CREATE TABLE IF NOT EXISTS home_page_audience_items (
  id varchar PRIMARY KEY,
  _order integer NOT NULL,
  _parent_id integer NOT NULL REFERENCES home_page(id) ON DELETE CASCADE,
  title varchar NOT NULL,
  button_text varchar DEFAULT 'Оставить заявку',
  button_link varchar DEFAULT '#contact-form'
);

CREATE INDEX IF NOT EXISTS home_page_audience_items_parent_idx ON home_page_audience_items(_parent_id);

CREATE TABLE IF NOT EXISTS home_page_audience_items_points (
  id varchar PRIMARY KEY,
  _order integer NOT NULL,
  _parent_id varchar NOT NULL REFERENCES home_page_audience_items(id) ON DELETE CASCADE,
  text varchar NOT NULL
);

CREATE INDEX IF NOT EXISTS home_page_audience_items_points_parent_idx ON home_page_audience_items_points(_parent_id);

CREATE TABLE IF NOT EXISTS home_page_consultations_left_card_items (
  id varchar PRIMARY KEY,
  _order integer NOT NULL,
  _parent_id integer NOT NULL REFERENCES home_page(id) ON DELETE CASCADE,
  text varchar NOT NULL
);
CREATE INDEX IF NOT EXISTS home_page_consultations_left_card_items_parent_idx ON home_page_consultations_left_card_items(_parent_id);

CREATE TABLE IF NOT EXISTS home_page_consultations_right_card_items (
  id varchar PRIMARY KEY,
  _order integer NOT NULL,
  _parent_id integer NOT NULL REFERENCES home_page(id) ON DELETE CASCADE,
  text varchar NOT NULL
);
CREATE INDEX IF NOT EXISTS home_page_consultations_right_card_items_parent_idx ON home_page_consultations_right_card_items(_parent_id);

CREATE TABLE IF NOT EXISTS home_page_career_guidance_items (
  id varchar PRIMARY KEY,
  _order integer NOT NULL,
  _parent_id integer NOT NULL REFERENCES home_page(id) ON DELETE CASCADE,
  title varchar NOT NULL,
  price varchar NOT NULL,
  button_text varchar DEFAULT 'Купить',
  button_link varchar DEFAULT '#contact-form'
);

CREATE INDEX IF NOT EXISTS home_page_career_guidance_items_parent_idx ON home_page_career_guidance_items(_parent_id);

CREATE TABLE IF NOT EXISTS home_page_career_guidance_items_points (
  id varchar PRIMARY KEY,
  _order integer NOT NULL,
  _parent_id varchar NOT NULL REFERENCES home_page_career_guidance_items(id) ON DELETE CASCADE,
  text varchar NOT NULL
);

CREATE INDEX IF NOT EXISTS home_page_career_guidance_items_points_parent_idx ON home_page_career_guidance_items_points(_parent_id);

CREATE TABLE IF NOT EXISTS home_page_entrepreneurship_items (
  id varchar PRIMARY KEY,
  _order integer NOT NULL,
  _parent_id integer NOT NULL REFERENCES home_page(id) ON DELETE CASCADE,
  title varchar NOT NULL,
  price varchar NOT NULL,
  button_text varchar DEFAULT 'Купить',
  button_link varchar DEFAULT '#contact-form'
);

CREATE INDEX IF NOT EXISTS home_page_entrepreneurship_items_parent_idx ON home_page_entrepreneurship_items(_parent_id);

CREATE TABLE IF NOT EXISTS home_page_entrepreneurship_items_points (
  id varchar PRIMARY KEY,
  _order integer NOT NULL,
  _parent_id varchar NOT NULL REFERENCES home_page_entrepreneurship_items(id) ON DELETE CASCADE,
  text varchar NOT NULL
);

CREATE INDEX IF NOT EXISTS home_page_entrepreneurship_items_points_parent_idx ON home_page_entrepreneurship_items_points(_parent_id);

CREATE TABLE IF NOT EXISTS payload_migrations (
  id SERIAL PRIMARY KEY,
  name varchar,
  batch numeric,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS payload_preferences (
  id SERIAL PRIMARY KEY,
  key varchar,
  value jsonb,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS payload_preferences_rels (
  id SERIAL PRIMARY KEY,
  "order" integer,
  parent_id integer NOT NULL REFERENCES payload_preferences(id) ON DELETE CASCADE,
  path varchar NOT NULL,
  users_id integer REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS payload_preferences_rels_parent_idx ON payload_preferences_rels(parent_id);
CREATE INDEX IF NOT EXISTS payload_preferences_rels_users_idx ON payload_preferences_rels(users_id);

CREATE TABLE IF NOT EXISTS payload_locked_documents (
  id SERIAL PRIMARY KEY,
  global_slug varchar,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS payload_locked_documents_rels (
  id SERIAL PRIMARY KEY,
  "order" integer,
  parent_id integer NOT NULL REFERENCES payload_locked_documents(id) ON DELETE CASCADE,
  path varchar NOT NULL,
  users_id integer REFERENCES users(id) ON DELETE CASCADE,
  media_id integer REFERENCES media(id) ON DELETE CASCADE,
  news_id integer REFERENCES news(id) ON DELETE CASCADE,
  reviews_id integer REFERENCES reviews(id) ON DELETE CASCADE,
  applications_id integer REFERENCES applications(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS payload_locked_documents_rels_parent_idx ON payload_locked_documents_rels(parent_id);
CREATE INDEX IF NOT EXISTS payload_locked_documents_rels_users_idx ON payload_locked_documents_rels(users_id);
CREATE INDEX IF NOT EXISTS payload_locked_documents_rels_media_idx ON payload_locked_documents_rels(media_id);
CREATE INDEX IF NOT EXISTS payload_locked_documents_rels_news_idx ON payload_locked_documents_rels(news_id);
CREATE INDEX IF NOT EXISTS payload_locked_documents_rels_reviews_idx ON payload_locked_documents_rels(reviews_id);
CREATE INDEX IF NOT EXISTS payload_locked_documents_rels_applications_idx ON payload_locked_documents_rels(applications_id);

ALTER TABLE IF EXISTS footer ADD COLUMN IF NOT EXISTS address_link varchar;
ALTER TABLE IF EXISTS home_page ADD COLUMN IF NOT EXISTS consultations_left_card_button_text varchar DEFAULT 'Купить';
ALTER TABLE IF EXISTS home_page ADD COLUMN IF NOT EXISTS consultations_left_card_button_link varchar DEFAULT '#contact-form';
ALTER TABLE IF EXISTS home_page ADD COLUMN IF NOT EXISTS consultations_right_card_button_text varchar DEFAULT 'Купить';
ALTER TABLE IF EXISTS home_page ADD COLUMN IF NOT EXISTS consultations_right_card_button_link varchar DEFAULT '#contact-form';
ALTER TABLE IF EXISTS media ADD COLUMN IF NOT EXISTS sizes_news_cover_url varchar;
ALTER TABLE IF EXISTS media ADD COLUMN IF NOT EXISTS sizes_news_cover_width numeric;
ALTER TABLE IF EXISTS media ADD COLUMN IF NOT EXISTS sizes_news_cover_height numeric;
ALTER TABLE IF EXISTS media ADD COLUMN IF NOT EXISTS sizes_news_cover_mime_type varchar;
ALTER TABLE IF EXISTS media ADD COLUMN IF NOT EXISTS sizes_news_cover_filesize numeric;
ALTER TABLE IF EXISTS media ADD COLUMN IF NOT EXISTS sizes_news_cover_filename varchar;
