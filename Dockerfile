FROM node:12.16.1

RUN mkdir -p /usr/src/facerecognition-api
WORKDIR /usr/src/facerecognition-api
COPY ./backend ./
RUN npm install

CMD ["/bin/bash"]
