FROM node:latest

EXPOSE 3000

# Install nodemon
RUN npm install -g nodemon

## Provides cached layer for node_modules
#ADD src/package.json /src/package.json
#RUN cd /src && npm install
#
## Define working directory
#WORKDIR /src
#ADD . /src

# Run app using nodemon
CMD ["nodemon", "/src/app.js"]