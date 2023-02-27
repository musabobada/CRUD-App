FROM node:17
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 5000
CMD ["node", "server.js"]