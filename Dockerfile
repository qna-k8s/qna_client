FROM nginx:1.19.10-alpine
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html
COPY ./build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g","daemon off;" ]
