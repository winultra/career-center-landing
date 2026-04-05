## Career Center Landing

Портфолио-проект лендинга и контентной админки для центра карьеры, профориентации и предпринимательства. Приложение собрано на `Next.js 15` и `Payload CMS 3`, поддерживает публичную landing page, управление контентом через admin-панель и приём заявок с сайта.

## Что внутри

- `Next.js App Router` для фронтенда и API-роутов
- `Payload CMS` как headless CMS и admin-панель
- `PostgreSQL` как основная база данных
- адаптивный лендинг с новостями, отзывами, CTA-блоками и формой заявки

## Локальный запуск

1. Установить зависимости:

```bash
npm install
```

2. Поднять Postgres:

```bash
docker compose up -d
```

3. Проверить `.env.local`:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/career_center_landing
PAYLOAD_SECRET=career_center_super_secret_change_me
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

4. Запустить проект:

```bash
npm run dev
```

Приложение будет доступно на [http://localhost:3000](http://localhost:3000), admin-панель Payload на `/admin`.

## Полезные команды

```bash
npm run dev
npm run build
npm run start
npm run create-admin
```

## Особенности проекта

- публичный лендинг может отрисоваться даже при недоступной БД, используя встроенный fallback-контент
- форма заявок валидируется на сервере
- контентные блоки, новости, отзывы и глобальные настройки редактируются через CMS

## Стек

`Next.js`, `React`, `Payload CMS`, `PostgreSQL`, `TypeScript`, `Zod`
