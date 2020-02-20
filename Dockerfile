FROM node:12.16.1

WORKDIR /usr/src/facerecognition-api
COPY ./backend ./
RUN npm install

CMD ["/bin/bash"]