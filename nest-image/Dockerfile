FROM node:16-alpine

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH="/home/node/.npm-global/bin:${PATH}"

RUN apk add --no-cache make gcc g++ python2 python3

RUN npm i -g nx