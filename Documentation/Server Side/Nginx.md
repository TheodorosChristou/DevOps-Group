# Nginx Configuration Documentation

## Server Block 1 - HTTP Redirect

### Description
The first server block listens on port 80 and redirects all HTTP traffic to the HTTPS version of the site. It also includes a location block for handling Let's Encrypt challenges.

### Configuration
```nginx
server {
  listen 80;
  server_name com619mongeese.info;
  
  location / {
    return 301 https://com619mongeese.info$request_uri;
  }
  
  location /.well-known/acme-challenge/ {
    root /var/www/certbot;
  }
}
```

### Instructions

- listen 80;: Listens on port 80 for HTTP traffic.

- server_name com619mongeese.info;: Specifies the server name for this block.

- location /: Redirects all requests to the HTTPS version of the site using a 301 redirect.

- location /.well-known/acme-challenge/: Handles Let's Encrypt challenges by serving files from the specified root directory.

## Server Block 2 - HTTPS Proxy

### Description

The second server block listens on port 443 for HTTPS traffic, includes SSL certificates, and proxies requests to the backend server on port 8443.

### Configuration

```nginx
server {
  listen 443 ssl;
  server_name com619mongeese.info;
  
  ssl_certificate /etc/letsencrypt/live/com619mongeese.info/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/com619mongeese.info/privkey.pem;
  include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
  
  location / {
    proxy_pass http://com619mongeese.info:8443;
  }
}
```

### Instructions

- listen 443 ssl;: Listens on port 443 for HTTPS traffic and enables SSL.

- server_name com619mongeese.info;: Specifies the server name for this block.

- **SSL Certificate Configuration:**

    - ssl_certificate: Path to the fullchain.pem file.

    - ssl_certificate_key: Path to the privkey.pem file.

    - include /etc/letsencrypt/options-ssl-nginx.conf;: Includes recommended SSL configurations.

    - ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;: Specifies the path to SSL Diffie-Hellman parameters.

    - location /: Proxies requests to the backend server (http://com619mongeese.info:8443).

## Usage

Include the location of the app.conf file in the volumes specified under the Nginx service of the Docker Compose file.