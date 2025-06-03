FROM node:20.12-alpine AS build
ENV DOCKER_BUILD="true"
WORKDIR /ui
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY --chmod=777 . .
RUN yarn build-only:production

FROM nginx:1.23
RUN rm -f /etc/nginx/conf.d/default.conf
COPY --from=build /ui/nginx_default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /ui/dist /usr/share/nginx/html
EXPOSE 80