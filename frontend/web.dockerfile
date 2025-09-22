FROM node:latest AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM ghcr.io/static-web-server/static-web-server:2 AS runtime
WORKDIR /app
COPY --from=build /app/dist /public
