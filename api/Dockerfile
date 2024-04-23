
FROM node:18-alpine
WORKDIR /app


COPY package*.json ./

RUN npm install --production



COPY . .
RUN npm install  vite
RUN npm run build
EXPOSE 87



CMD ["npm", "run", "dev"]