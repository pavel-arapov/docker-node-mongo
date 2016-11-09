### Example Docker configuration for Node app with MongoDB and Nginx

## How to run

```
docker-compose build
docker-compose up
```

## Disclaimer

This is just a boilerplate for new projects, there is no goal to have a full customisation. This configuration should
give a fast development environment.

## Nginx

Have a basic configuration with a reverse proxy to server website on `localhost` with domain name `app.dev`. 
To make it work you should make a configuration in your `/ets/hosts/` file, add next line `127.0.0.1 app.dev`. 
Nginx is a reliable web server and I prefer always have it as a front. It should serve all static content as images, 
css, javascript files. 

## Node.js application

Basic application based on `express.js` framework and `mongoose` to establish a connection with MongoDB. 

## MongoDB

Simple installation without any configuration.

## Docker

In this example we use 3 containers: web - with nginx, app - node.js app, mongo - mongodb. 
They have a shared network. Nginx configured to use a shared volume `/src/public` to server static content. 
MongoDB uses shared volume `data` to store database. Node.js application uses `/src` folder for application needs.

