FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000 

CMD [ "npm", "start" ]

# FROM node:14-alpine

# RUN mkdir -p /backend
# WORKDIR /backend

# COPY package.json /backend
# COPY package-lock.json /backend
# COPY . /backend

# RUN npm install


# CMD ["npm", "start"]
