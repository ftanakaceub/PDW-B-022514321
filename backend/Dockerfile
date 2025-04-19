FROM node:22-alpine
WORKDIR /backend
COPY package*.json /backend
RUN npm i --force && npm i pg --save
COPY . /backend
EXPOSE 3000
CMD ["npm", "run", "start"]
