#stage 1
FROM node:16 as node
WORKDIR /app
COPY . .
RUN npm install
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN npm run --openssl-legacy-provider build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/angular-project /usr/share/nginx/html