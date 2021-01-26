# Setting up a server using Node and Express Instructions

1. Create app folder and run `npm init` in terminal after you cd into the directory

2. Make sure npm and node.js are both installed

3. Create a Server using a package from our local server (express.js)

- we can create a web network using express, it's lightweight
- downside is that you have to do extra legwork to make sure you have web security against hackers

run `npm install --save express`

This will give us our node_modules/packages/dependencies
node depends on these folders to run express

EXERCISE 1 (Creating a web network)
1A) Create a route that will return a simple "Hello world" message
2A) Create a route that is set to "/name". However, change this route slightly so that it will accept a parameter, which will represent a persons name. The response should return a message saying "Hello" and the persons name.

EX: '/name/Michael' => "Hello Michael!"
