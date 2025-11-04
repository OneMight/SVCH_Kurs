FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install

RUN chown -R node:node /app
USER node

COPY . .
EXPOSE 3000
CMD ["npm", "start"]