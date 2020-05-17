FROM nginx:1.17

COPY default.conf.patch /tmp/
RUN apt-get -q update \
 && apt-get -q install -y patch \
 && patch /etc/nginx/conf.d/default.conf /tmp/default.conf.patch \
 && echo 'b16df18a1bab47a63dc9c5b22f25e378a33d4c0d  /etc/nginx/conf.d/default.conf' | sha1sum -c \
 && apt-get -q -y purge patch \
 && rm -rf /var/lib/apt/lists/* /tmp/default.conf.patch
 
