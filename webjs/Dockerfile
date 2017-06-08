FROM node:7.7.0
MAINTAINER Ender Mei<endermeihl@gmail.com>
RUN mkdir /home/webjs
WORKDIR /home/webjs
COPY . /home/webjs
RUN npm install
EXPOSE 8088
CMD [ "npm", "start" ]