FROM ubuntu:jammy

ENV DEBIAN_FRONTEND="noninteractive"

ARG NODE_VERSION="20"

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    # Install npm with apt to use n
    nodejs npm \
    # Install utils
    wget curl gpg git \
    # Install Zsh to use Oh My Zsh
    zsh

# Install Oh My Zsh
# See: https://ohmyz.sh
ARG OH_MY_ZSH_INSTALLATION_SCRIPT_URL="https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh"
RUN sh -c "$(wget ${OH_MY_ZSH_INSTALLATION_SCRIPT_URL} -O -)"

# Install Node.js
RUN npm install -g n
RUN n ${NODE_VERSION}

# Install pnpm
RUN npm install -g pnpm

# Clean up apt
RUN apt autoremove -y && \
    apt clean -y && \
    rm -rf /var/lib/apt/lists/*
