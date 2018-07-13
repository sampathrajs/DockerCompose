FROM node:slim

LABEL maintainer="Neelakandan Vedachalam (neelakandan.v@dsrc.co.in)"

WORKDIR /app

COPY /. /app

RUN npm install

CMD ["node", "server.js"]

EXPOSE 3000
