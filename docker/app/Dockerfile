FROM php:8.0-fpm-alpine

LABEL maintainer="Adrien DELHOM <adrien.delhom@outlook.com>"

# Arguments defined in docker-compose.yml
ARG USER
ARG UID
ARG GROUP
ARG GID

# Add UID and GID
RUN apk add shadow \
    && usermod -u $UID $USER \
    && groupmod -g $GID $GROUP

# Set right for the source directory
RUN chown -R $USER:$GROUP /var/www

RUN apk add --no-cache --update --repository http://nl.alpinelinux.org/alpine/edge/testing/ $PHPIZE_DEPS \
    git \
    nodejs \
    npm \
    make \
    zlib \
    zlib-dev \
    curl \
    curl-dev \
    libmcrypt-dev \
    jpeg \
    libjpeg \
    libjpeg-turbo-dev \
    libpng \
    libpng-dev \
    libwebp-dev \
    libxpm-dev \
    libxml2-dev \
    libsodium \
    libzip \
    libzip-dev \
    zip \
    unzip

RUN pecl install xdebug

RUN docker-php-ext-install mysqli pdo pdo_mysql zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_HOME=/tmp
ENV PATH="${PATH}:/root/.composer/vendor/bin"
RUN find /tmp -type d -exec chmod -v 1777 {} +

ADD php.ini /etc/php/conf.d/
ADD php.ini /etc/php/cli/conf.d/
ADD php-fpm.conf /etc/php/php-fpm.d/
ADD xdebug.ini  /etc/php/conf.d/

RUN docker-php-ext-enable xdebug

RUN npm install --global yarn

# Change current user to www-data
USER $USER

WORKDIR /var/www/app

EXPOSE 9000

CMD ["php-fpm", "-F"]
