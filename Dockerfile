FROM node:17

WORKDIR /usr/local/app

COPY  package*.json .

RUN npm install

COPY . .

ENV CI=true

RUN npm test

RUN npm run build  

RUN echo HAPPY_CODE


EXPOSE 3000

CMD ["sh","-c","yarn start"]
