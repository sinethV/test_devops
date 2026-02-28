# use official Node.js LTS image
FROM node:18-alpine

# create app directory
WORKDIR /usr/src/app

# install dependencies
COPY app/package.json ./
RUN npm install --production

# bundle app source
COPY app/ .

# expose port and start
EXPOSE 3000
CMD ["npm", "start"]
