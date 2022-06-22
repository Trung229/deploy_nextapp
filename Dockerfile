FROM node:16.15.1

WORKDIR /usr/local/app

COPY  package.json .


RUN ls -a 

RUN npm install

COPY . .

RUN npm run build  

RUN echo HAPPY_CODE

EXPOSE 3000

CMD ["sh","-c","yarn start"]
