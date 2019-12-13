# Dockerfile
# 使用node做为镜像
FROM node:12.13.0-alpine

# Installs latest Chromium (77) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn  
# 在容器中创建该目录
RUN mkdir -p /koot-clinic
#移动当前目录下面的文件到app目录下
COPY ./package.json /koot-clinic/package.json
COPY ./pm2.json /koot-clinic/pm2.json
COPY ./dist-api-server /koot-clinic/dist-api-server
COPY ./dist-ssr-server /koot-clinic/dist-ssr-server
# COPY ./node_modules /koot-clinic/node_modules

RUN mkdir -p sh

# 设置容器的工作目录为该目录(相当于cd)


WORKDIR /koot-clinic
# 向外提供8080 8081端口
EXPOSE 8080
EXPOSE 8081
# 容器创建完成后执行的命令

RUN npm i npm@latest pm2@latest -g
RUN npm i
CMD pm2 startOrGracefulReload pm2.json --no-daemon
# CMD node ./dist-ssr-server/index.js