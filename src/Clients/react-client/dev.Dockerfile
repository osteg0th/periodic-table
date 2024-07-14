FROM node:20-alpine

WORKDIR /app
COPY ["/src/Clients/react-client/package.json", "./"]
COPY ["/src/Clients/react-client/package-lock.json", "./"]
RUN npm ci

COPY /src/Clients/react-client/src ./src
COPY /src/Clients/react-client/public ./public
COPY /src/Clients/react-client/next.config.mjs .
COPY /src/Clients/react-client/tsconfig.json .

CMD npm run dev