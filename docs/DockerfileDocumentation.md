# Dockerfile Documentation

## Base Stage

### Description
The base stage is responsible for setting up the Node.js environment, installing dependencies, and copying the application code into the image.

### Dockerfile
```dockerfile
FROM node:17 as base
WORKDIR ./
COPY package.json ./
RUN npm install
COPY . .
```

### Instructions:

- FROM node:17 as base: Specifies the base image as Node.js version 17.
- WORKDIR ./: Sets the working directory to the root of the container filesystem.
- COPY package.json ./: Copies the package.json file to the working directory.
- RUN npm install: Installs Node.js dependencies defined in the package.json file.
- COPY . .: Copies the entire application code into the image.

### Production Stage

Description
The production stage extends the base stage and prepares the image for production by setting the Node.js environment path and running the build script.

## Dockerfile
```Docker
FROM base as production
ENV NODE_PATH=./build
RUN npm run build
```

### Instructions:

- FROM base as production: Specifies the production stage based on the previously defined base stage.

- ENV NODE_PATH=./build: Sets the environment variable NODE_PATH to the build directory, specifying the location of the compiled code.

- RUN npm run build: Executes the npm run build command, which typically compiles TypeScript code or performs other build tasks required for production.

## Usage
To build the Docker image, navigate to the directory containing the Dockerfile and run the following command:

```Docker
docker build -t ts-node-docker .
```

