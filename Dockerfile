FROM node:8-alpine as builder

RUN apk add --no-cache yarn python g++ make

COPY package.json yarn.lock ./

RUN yarn config set no-progress true

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN yarn install && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN yarn start

FROM nginx:alpine

RUN rm -r /usr/share/nginx/html/*

COPY --from=builder /ng-app/dist /usr/share/nginx/html
