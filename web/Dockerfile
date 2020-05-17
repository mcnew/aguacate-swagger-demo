FROM nginx:1.17

COPY default.conf.patch /tmp/
RUN apt-get -q update \
 && apt-get -q install -y patch \
 && patch /etc/nginx/conf.d/default.conf /tmp/default.conf.patch \
 && echo 'bdf1c4caba1aa6d26b7983ef747eee1b9af0e8f4  /etc/nginx/conf.d/default.conf' | sha1sum -c \
 && apt-get -q -y purge patch \
 && rm -rf /var/lib/apt/lists/* /tmp/default.conf.patch
 
