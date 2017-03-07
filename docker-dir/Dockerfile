FROM node:7.7.0
MAINTAINER Ender Mei<endermeihl@gmail.com>
EXPOSE 8082
RUN mkdir /home/vfile
RUN mkdir /home/vfile/webjs
ADD start.sh /usr/bin
ADD server.js /home/vfile/webjs
ADD index.html /home/vfile/webjs
WORKDIR /home/vfile/webjs
ENTRYPOINT start.sh

