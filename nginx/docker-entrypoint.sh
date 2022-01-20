# create config file for env variables
./generate_config_js.sh > /usr/share/nginx/html/config.js

# start express server
pm2 start server.js

# start nginx
nginx -g 'daemon off;'