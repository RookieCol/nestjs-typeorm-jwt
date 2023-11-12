FROM node:18-alpine

WORKDIR /app
RUN npm install -g pnpm
COPY package.json .
RUN pnpm install
COPY . .
