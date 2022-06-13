FROM node:lts-alpine

WORKDIR /usr/src/app/frontend

COPY package*.json ./

RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]