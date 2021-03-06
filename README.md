[![Crowdin](https://badges.crowdin.net/wallpaper-engine-faq/localized.svg)](https://crowdin.com/project/wallpaper-engine-faq)

# Update / Install guide

```
git pull origin master
yarn install
npm run docs:build
```

For local testing, use `npm run docs:dev` instead and go to 0.0.0.0:8080.

Built docs will be placed in sub-directory, point web server at that, done.

Nginx config:

```
server {
    listen 80 default_server;
    server_name _;
    return 301 https://$host$request_uri;
}

server {
        listen 443 default_server ssl;
        root /var/www/help.wallpaperengine.io/docs/.vuepress/dist;
        server_name help.wallpaperengine.io;
        index /en/index.html;

        ssl_certificate     /etc/letsencrypt/live/help.wallpaperengine.io/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/help.wallpaperengine.io/privkey.pem;

        location / {
                try_files $uri $uri/ /en/index.html /404.html;
        }
}
```