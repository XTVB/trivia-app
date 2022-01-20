# FROM registry.access.redhat.com/ubi7/ubi

# EXPOSE 80
# EXPOSE 443

# ENV NODEJS_VERSION=12 \
#     NPM_RUN=start \
#     NPM_CONFIG_PREFIX=$HOME/.npm-global \
#     NGINX_VERSION=1.18 \
#     NGINX_SHORT_VER=118 \
#     PERL_SCL_SHORT_VER=530 \
#     VERSION=0

# ENV PATH=/opt/rh/rh-nodejs$NODEJS_VERSION/root/usr/bin:$HOME/node_modules/.bin/:$HOME/.npm-global/bin/:$PATH \
#     LD_LIBRARY_PATH=/opt/rh/rh-nodejs$NODEJS_VERSION/root/usr/lib64 \
#     MANPATH=/opt/rh/rh-nodejs$NODEJS_VERSION/root/usr/share/man \
#     PKG_CONFIG_PATH=/opt/rh/rh-nginx$NGINX_SHORT_VER/root/usr/lib64/pkgconfig${PKG_CONFIG_PATH:+:${PKG_CONFIG_PATH}} \
#     PERL5LIB="/opt/rh/rh-nginx$NGINX_SHORT_VER/root/usr/lib64/perl5/vendor_perl${PERL5LIB:+:${PERL5LIB}}" \
#     NGINX_CONFIGURATION_PATH=${APP_ROOT}/etc/nginx.d \
#     NGINX_CONF_PATH=/etc/opt/rh/rh-nginx${NGINX_SHORT_VER}/nginx/nginx.conf \
#     NGINX_DEFAULT_CONF_PATH=${APP_ROOT}/etc/nginx.default.d \
#     NGINX_CONTAINER_SCRIPTS_PATH=/usr/share/container-scripts/nginx \
#     NGINX_APP_ROOT=${APP_ROOT} \
#     NGINX_LOG_PATH=/var/opt/rh/rh-nginx${NGINX_SHORT_VER}/log/nginx \
#     NGINX_PERL_MODULE_PATH=${APP_ROOT}/etc/perl

# RUN echo "sslverify=false">> /etc/yum.conf && echo "minrate=100" >> /etc/yum.conf && echo "timeout=300" >> /etc/yum.conf

# # install nodeJs dependencies for pm2 server
# RUN yum install -y yum-utils && \
#     ( [ "rh-${NAME}${NODEJS_VERSION}" != "${NODEJS_SCL}" ] && yum remove -y ${NODEJS_SCL}\* || : ) && \
#     INSTALL_PKGS="rh-nodejs${NODEJS_VERSION} rh-nodejs${NODEJS_VERSION}-npm rh-nodejs${NODEJS_VERSION}-nodejs-nodemon nss_wrapper" && \
#     ln -s /usr/lib/node_modules/nodemon/bin/nodemon.js /usr/bin/nodemon && \
#     yum install -y --setopt=tsflags=nodocs $INSTALL_PKGS && \
#     rpm -V $INSTALL_PKGS && \
#     yum -y clean all --enablerepo='*'

# ENV PATH=/opt/rh/rh-perl$PERL_SCL_SHORT_VER/root/usr/local/bin:/opt/rh/rh-perl$PERL_SCL_SHORT_VER/root/usr/bin:/opt/rh/rh-nginx$NGINX_SHORT_VER/root/usr/bin:/opt/rh/rh-nginx$NGINX_SHORT_VER/root/usr/sbin${PATH:+:${PATH}} \
#     MANPATH=/opt/rh/rh-perl$PERL_SCL_SHORT_VER/root/usr/share/man:/opt/rh/rh-nginx$NGINX_SHORT_VER/root/usr/share/man:${MANPATH} \
#     LD_LIBRARY_PATH=/opt/rh/rh-perl$PERL_SCL_SHORT_VER/root/usr/lib64

# # install dependencies for nginx
# RUN yum install -y yum-utils && \
#     INSTALL_PKGS="nss_wrapper bind-utils gettext hostname rh-nginx${NGINX_SHORT_VER} rh-nginx${NGINX_SHORT_VER}-nginx \
#                   rh-nginx${NGINX_SHORT_VER}-nginx-mod-stream rh-nginx${NGINX_SHORT_VER}-nginx-mod-http-perl" && \
#     yum install -y --setopt=tsflags=nodocs $INSTALL_PKGS && \
#     rpm -V $INSTALL_PKGS && \
#     yum -y clean all --enablerepo='*'

# RUN mkdir -p ${NGINX_APP_ROOT}/etc/nginx.d/ && \
#     mkdir -p ${NGINX_APP_ROOT}/etc/nginx.default.d/ && \
#     mkdir -p ${NGINX_APP_ROOT}/src/nginx-start/ && \
#     mkdir -p ${NGINX_CONTAINER_SCRIPTS_PATH}/nginx-start && \
#     mkdir -p ${NGINX_LOG_PATH} && \
#     mkdir -p ${NGINX_PERL_MODULE_PATH} && \
#     ln -s ${NGINX_LOG_PATH} /var/log/nginx && \
#     ln -s /etc/opt/rh/rh-nginx${NGINX_SHORT_VER}/nginx /etc/nginx && \
#     ln -s /opt/rh/rh-nginx${NGINX_SHORT_VER}/root/usr/share/nginx /usr/share/nginx

# COPY /build /usr/share/nginx/html

# # data for pm2
# COPY nginx/.npmrc /usr/share/nginx/html/server
# COPY nginx/package.json /usr/share/nginx/html/server

# # nginx conf
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/nginx.conf

# # scripts for docker to use env vars
# COPY nginx/docker-entrypoint.sh /usr/share/nginx/html/server
# COPY nginx/generate_config_js.sh /usr/share/nginx/html/server
# RUN chmod +x /usr/share/nginx/html/server/docker-entrypoint.sh /usr/share/nginx/html/server/generate_config_js.sh

# WORKDIR /usr/share/nginx/html/server

# # install pm2 for camunda cors server
# RUN npm install pm2 -g --strict-ssl=false
# RUN npm install

# ENTRYPOINT  [ "sh", "./docker-entrypoint.sh" ]