FROM node:20-alpine
WORKDIR "/app"

ENV CI=true
COPY ./package.json .
RUN npm i

COPY . .
RUN npm run build

FROM nginx
EXPOSE 5173
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html