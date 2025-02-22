# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Устанавливаем pnpm
RUN npm install -g pnpm

# Устанавливаем зависимости
RUN pnpm install --frozen-lockfile

# Копируем весь проект в контейнер
COPY . .

# Собираем проект
RUN pnpm build

# Экспонируем порт 3000
EXPOSE 3000

# Запускаем приложение
CMD ["pnpm", "start"]