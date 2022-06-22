FROM node:17

WORKDIR /usr/local/app

RUN curl -sL https://sentry.io/get-cli/ | bash

COPY  package*.json .

COPY yarn.lock . 

COPY . .

RUN yarn

RUN yarn build  

EXPOSE 3000

CMD ["sh","-c","yarn start"]
