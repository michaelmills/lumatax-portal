#!/bin/bash
set -e

filename=`ls main.*.js`
truncate -s 0 $filename
envsubst '$SERVER_BASE_URL' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && \
envsubst '$SERVER_BASE_URL' < /usr/share/nginx/html/main.js.template > /usr/share/nginx/html/$filename && \

exec nginx -g 'daemon off;'
