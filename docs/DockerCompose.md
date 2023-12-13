# Docker Compose Documentation

## Version
The Docker Compose file uses version '3' syntax.
```yaml
version: '3'
```
## Services

## 1. Nginx Service

### Description

The Nginx service utilizes the latest available Nginx image and exposes ports 80 (HTTP) and 443 (HTTPS). It is configured to always restart upon shutdown and mounts volumes for Nginx configuration and Let's Encrypt certificates.

### Configuration

```yaml
nginx:
  image: nginx:latest
  ports:
    - "80:80"
    - "443:443"
  restart: always
  volumes:
    - ./data/nginx:/etc/nginx/conf.d/:ro
    - ./data/certbot/conf:/etc/letsencrypt/:ro
    - ./data/certbot/www:/var/www/certbot/:ro
```

## 2. Certbot Service

### Description

The Certbot service uses the Certbot image to manage Let's Encrypt certificates. It mounts volumes for configuration and webroot paths required by Certbot.

### Configuration

```yaml
certbot:
  image: certbot/certbot
  volumes:
    - ./data/certbot/conf:/etc/letsencrypt/:rw
    - ./data/certbot/www:/var/www/certbot/:rw
```

## 3. ts-node-docker Service

### Description: 

The ts-node-docker service builds a Docker image based on the provided Dockerfile for the TypeScript application and exposes port 8443 for the application. It mounts the source code directory and sets up a container named "ts-node-docker."

### Configuration
```yaml
ts-node-docker:
  build:
    context: .
    dockerfile: Dockerfile
    target: base
  volumes:
    - ./src:/home/node/app/src
  container_name: ts-node-docker
  expose:
    - '8443'
  ports:
    - '8443:3000'
  command: npm run dev
```

### Usage

To run the Docker Compose environment, navigate to the directory containing the docker-compose.yml file and use the following command:

```
docker-compose up -d
```

To stop the environment, use:

```
docker-compose down
```