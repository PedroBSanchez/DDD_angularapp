FROM node:latest as build

WORKDIR /usr/local/app

copy ./ /usr/local/app/

run npm install

run npm run build

from nginx:latest
copy --from=build /usr/local/app/dist/ddd-angularapp /usr/share/nginx/html

expose 81