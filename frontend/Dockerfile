FROM node:22-alpine
WORKDIR /frontend
COPY package*.json /frontend
RUN npm i --force
COPY . /frontend
EXPOSE 3000
CMD ["npm", "run", "start"]