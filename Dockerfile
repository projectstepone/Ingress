#------------

# FROM node:14.16.1 

# WORKDIR /usr/src/app

# ENV PATH /ingress/node_modules/.bin:$PATH

# COPY client/ ./client/
# RUN cd client && npm install && npm run build

# COPY backend/package.json ./backend/
# RUN cd backend && npm install

# COPY backend ./backend
# ENV KAFKA_CLIENT_ID="ingress" KAFKA_BROKERS="kafka1:9092,kafka2:9092" KAFKA_TOPIC="ingress"
# # CMD ["node", "./backend/server.js"]
# EXPOSE 3000

# EXPOSE 4000
# # WORKDIR /root/
# RUN npm i pm2 serve -g
# CMD ["sh","-c","pm2 start ./backend/server.js && serve -s ./client/build"]
#-----------------

# FROM node:14

# # set working directory
# WORKDIR /ingress

# # add `/ingress/node_modules/.bin` to $PATH
# ENV PATH /ingress/node_modules/.bin:$PATH

# # install and cache ingress dependencies
# COPY ./client/package*.json /ingress/client/
# RUN npm install

# COPY ./backend/package*.json /ingress/backend/
# RUN npm install

# # RUN npm install -g @angular/cli@7.3.9 pm2

# # add ingress
# COPY ./client/ /ingress/client/
# COPY ./backend/ /ingress/backend/

# # RUN ng build --prod
# CMD cd ./client && npm run build && cd ../backend && NODE_ENV=production pm2-runtime server.js

#------------------------

# FROM node:14.16.1 AS ui-build
# WORKDIR /usr/src/app
# ENV PATH /ingress/node_modules/.bin:$PATH
# COPY client/ ./client/
# RUN cd client && npm install && npm run build

# FROM nginx:1.12-alpine
# COPY --from=ui-build /usr/src/app/client/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE 80
# EXPOSE 4000

# FROM node:14.16.1 AS server-build
# WORKDIR /root/
# COPY --from=ui-build /usr/src/app/client/build ./client/build
# COPY backend/package*.json ./backend/
# RUN npm i pm2 -g
# RUN cd backend && npm install
# COPY backend ./backend
# ENV KAFKA_CLIENT_ID="ingress" KAFKA_BROKERS="kafka1:9092,kafka2:9092" KAFKA_TOPIC="ingress"
# # CMD ["node", "./backend/server.js"]
# # EXPOSE 4000
# # WORKDIR /root/
# CMD ["sh","-c","nginx && node ./backend/server.js"]




# # CMD node ./backend/server.js
# # EXPOSE 4000

# # CMD [ "node", "./backend/server.js"]   
# # "nginx", "-g", "daemon off", "&&",

#------------


# base image
FROM node:14.16.1

WORKDIR /ingress

ENV PATH /ingress/node_modules/.bin:$PATH

COPY ./client/package*.json /ingress/client/
RUN npm install

COPY ./backend/package*.json /ingress/backend/
RUN npm install
RUN npm install pm2 -g

COPY ./client/ /ingress/client/
COPY ./backend/ /ingress/backend/

RUN cd ./client && npm run build
ENV KAFKA_CLIENT_ID="ingress" KAFKA_BROKERS="kafka1:9092,kafka2:9092" KAFKA_TOPIC="ingress"
CMD [ "pm2-runtime", "start", "/ingress/backend/server.js" ]