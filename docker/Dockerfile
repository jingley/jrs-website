# syntax = docker/dockerfile:1.0-experimental

FROM node:current-alpine3.10
USER root

# install ssh client and git
RUN apk --update add git openssh

# download the public key for github
RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts
