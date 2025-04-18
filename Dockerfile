FROM node:22-alpine
WORKDIR /backend
COPY package*.json /backend
RUN npm i
COPY . /backend
EXPOSE 5000
CMD ["npm", "run", "start"]
