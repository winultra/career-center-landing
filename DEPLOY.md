## Production Deploy

Стек деплоя рассчитан на один VPS с `Ubuntu`, `Docker Compose`, `nginx` и `certbot`.

### Что должно быть открыто наружу

- `80/tcp` для `nginx` и certbot
- `443/tcp` для `nginx`

`3000` и `5432` наружу публиковать не нужно.

### Обязательные env

Создайте `.env.production` на сервере по образцу `.env.example`.

Обязательные переменные:

- `NEXT_PUBLIC_SERVER_URL`
- `DATABASE_URL`
- `PAYLOAD_SECRET`
- `POSTGRES_DB`
- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `SUPERADMIN_EMAIL`
- `SUPERADMIN_PASSWORD`
- `EDITOR_EMAIL`
- `EDITOR_PASSWORD`

Опционально:

- `RATE_LIMIT_WINDOW_MS`
- `RATE_LIMIT_MAX_REQUESTS`

### Запуск

```bash
cp .env.example .env.production
docker compose --env-file .env.production build
docker compose --env-file .env.production up -d
docker compose --env-file .env.production run --rm app npm run bootstrap:users
```

### Health endpoints

- `GET /api/health/live`
- `GET /api/health/ready`

`live` проверяет, что приложение живо.
`ready` проверяет доступность базы данных и подходит для readiness-check.

### Персистентные данные

Нельзя удалять Docker volumes:

- `postgres_data` для PostgreSQL
- `media_data` для Payload uploads

### nginx

`nginx` на хосте должен проксировать домен на `127.0.0.1:3000`.
Postgres должен оставаться только во внутренней Docker-сети.

Пример upstream:

```nginx
server {
    listen 80;
    server_name career-center.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

После этого certbot можно настраивать поверх `nginx`.

### Bootstrap users

Команда:

```bash
docker compose --env-file .env.production run --rm app npm run bootstrap:users
```

Создаются две учётки:

- `SUPERADMIN_EMAIL / SUPERADMIN_PASSWORD` с ролью `admin`
- `EDITOR_EMAIL / EDITOR_PASSWORD` с ролью `editor`

Скрипт идемпотентный: если пользователь уже существует, повторно он не создаётся.
