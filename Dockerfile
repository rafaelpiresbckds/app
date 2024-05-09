# syntax=docker/dockerfile:1.4

# Create image based on the official Node image from dockerhub
FROM node:lts-buster AS development

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
#COPY package.json /usr/src/app
#COPY package-lock.json /usr/src/app

# Install dependecies
RUN npm i install \
    && npm install ajv@7.2.3 ajv-errors@2.0.1 ajv-formats@2.1.1 --save

#RUN npm ci

# Get all the code needed to run the app
#COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]

FROM development as dev-envs
RUN apt-get update
RUN apt-get install -y --no-install-recommends git


RUN useradd -s /bin/bash -m vscode
RUN groupadd docker
RUN usermod -aG docker vscode

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD [ "npm", "start" ]