# build environment
FROM node:14.5.0-slim as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm i
RUN npm install react-scripts@4.0.2 -g --silent
COPY . ./
RUN npm run build

# production environment
FROM arm64v8/nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]