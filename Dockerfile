# Base image
FROM node:14.15.1-alpine3.12

# 빌드된 산출물 실행시키기 위한 serve 모듈
RUN npm install -g serve

# 작업공간
RUN mkdir /app
WORKDIR /app

# 빋르된 산출물 도커 이미지로 복사
RUN mkdir ./build
COPY ./build ./build

# serve 실행 명령어
ENTRYPOINT ["serve", "-s", "build"]




# docker dev
# # base image
# FROM node:12.2.0-alpine

# # set working directory
# WORKDIR /app

# # `/app/node_modules/.bin`을 $PATH 에 추가
# ENV PATH /app/node_modules/.bin:$PATH

# # app dependencies, install 및 caching
# COPY package.json /app/package.json
# RUN yarn install

# # 앱 실행
# CMD ["yarn", "start"]