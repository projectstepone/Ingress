# base image
FROM node:14

# set working directory
WORKDIR /ingress

# add `/ingress/node_modules/.bin` to $PATH
ENV PATH /ingress/node_modules/.bin:$PATH

# install and cache ingress dependencies
COPY ./client/package*.json /ingress/client/
RUN npm install

COPY ./backend/package*.json /ingress/backend/
RUN npm install

# RUN npm install -g @angular/cli@7.3.9 pm2

# add ingress
COPY ./client/ /ingress/client/
COPY ./backend/ /ingress/backend/

# RUN ng build --prod
CMD cd ./client && npm run build

# start backend
CMD cd ./backend && NODE_ENV=production pm2-runtime server.js