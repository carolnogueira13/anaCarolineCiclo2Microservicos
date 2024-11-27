FROM node:22.11.0-alpine
WORKDIR /home/node/api

COPY package*.json ./

RUN npm config set strict-ssl false

RUN npm install

COPY . .
COPY ./.env ./.env

RUN npx prisma db pull
RUN npx prisma generate
RUN npm run build


CMD ["npm", "run", "start:prod"]