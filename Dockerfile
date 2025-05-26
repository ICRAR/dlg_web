FROM nginx:alpine

# Replace default nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy static site content
COPY src/ /usr/share/nginx/html/

EXPOSE 80