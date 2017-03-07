#!/bin/bash
echo "Hello World !"
echo "who"
nohup node /home/vfile/webjs/server.js &
echo "End"
ps -ef|grep node
node
#ping www.tskspx.com
