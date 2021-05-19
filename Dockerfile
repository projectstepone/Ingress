# base image
FROM node:10

ENV PATH node_modules/.bin:$PATH

# install and cache ingress dependencies
COPY client client

COPY backend backend

RUN cd client && npm install --production --silent && npm run build && cd .. && rm -rf client

RUN cd backend && npm install --production --silent && npm i pm2

COPY configs configs

# start backend
CMD cd backend && NODE_ENV=production pm2-runtime server.js