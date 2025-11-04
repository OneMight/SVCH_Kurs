FROM node:18-alpine
WORKDIR /server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
RUN chown -R node:node /server
USER node

CMD ["node", "server.js"]
