FROM node:22-alpine
WORKDIR /frontend
COPY package*.json /frontend
RUN npm i --force
COPY . /frontend
EXPOSE 4200
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--poll", "2000"]
