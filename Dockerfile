FROM node:17 as builder

WORKDIR /usr/local/app

# RUN curl -sL https://sentry.io/get-cli/ | bash

COPY  package*.json .

COPY yarn.lock . 

RUN npm install 


COPY . .

RUN npm run build

FROM node:lts-alpine3.15 

WORKDIR /opt/app

COPY  --from=builder /usr/local/app/package.json ./

COPY --from=builder /usr/local/app/.next ./.next

RUN npm install --production

RUN ls -a

EXPOSE 3000

CMD ["npm","run","start"]
