FROM node:10-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN npm run build

ENV NODE_ENV='prod'

ENV ECHO_SERVICE_GET_PING=''
ENV ECHO_SERVICE_POST_ECHO='echo'
ENV ECHO_SERVICE_POST_REVERSE='reverse'
ENV ECHO_SERVICE_GET_ECHOES='echoes'

ENV PORT=3000
EXPOSE 3000

CMD [ "npm", "run", "start" ]