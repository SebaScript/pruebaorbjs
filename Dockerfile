FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ ./
EXPOSE 5500
CMD ["node", "server.js"]