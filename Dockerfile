FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build:prod

FROM nginx:stable-alpine
COPY --from=build /app/dist /var/www/dist
COPY --from=build /app/config/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
