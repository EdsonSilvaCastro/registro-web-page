FROM node:16

WORKDIR /app

COPY package*.json ./


RUN npm install
RUN npm install mongoose body-parser express cors


COPY ./ /app/

EXPOSE 3000

CMD ["node","app.js"]