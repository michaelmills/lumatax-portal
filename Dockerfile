FROM nginx

# move startup script into place
COPY nginx_docker_entrypoint.sh /etc/nginx/nginx_docker_entrypoint.sh

RUN ["chmod", "+x", "/etc/nginx/nginx_docker_entrypoint.sh"]

# move nginx.conf into place as a template
COPY nginx.conf.template /etc/nginx/nginx.conf.template
WORKDIR /usr/share/nginx/html

# move generated Angular code into place
COPY dist/lumatax-portal ./

# move the generated main.js file to a template
COPY dist/lumatax-portal/main.*.js ./main.js.template
COPY dist/lumatax-portal/main.*.js ./

# the command that does variable replacement and then starts nginx; called on container startup
ENTRYPOINT ["/etc/nginx/nginx_docker_entrypoint.sh"]

EXPOSE 80
