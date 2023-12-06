# Certbot Configuration Documentation

## Requesting a Certificate

### Description
Certbot is used to manage SSL/TLS certificates for enabling secure communication over HTTPS. In this application, it is used to receive HTTPS certification from Let's Encrypt, a non-profit certificate authority run by the Internet Security Research Group.

## Configuration

### Docker Compose Configuration
```yaml
certbot:
  image: certbot/certbot
  volumes:
    - ./data/certbot/conf:/etc/letsencrypt/:rw
    - ./data/certbot/www:/var/www/certbot/:rw
```

## Usage
To start the certification function of Certbot, run the following command from the root directory of the application:

```
sudo docker compose run certbot certonly
```
Follow the prompts to request a valid certificate.

Adjust the volume paths and other configurations based on your application's requirements.

This configuration sets up Certbot using Docker Compose, mounting volumes for configuration and webroot paths. The usage command initiates the certification process, and you can follow the prompts to obtain a valid certificate.