console.log("Starting web app...");

const express = require("express");
const portNumber = 4000;
const path = require("path");

const app = express();
console.log("App created...Attempting to listen on port:", portNumber);

// ROUTES //

// request object => all data coming from client - GOING TO SERVER
// response object => all data coming from server back to client - BACK TO CLIENT

// app.get("/", (request, response) => {
//   console.log(request);
//   response.send("Hello World!");
// });

app.get("/", (request, response) => {
  //access/use public folder first
  app.use(express.static("public"));
  //access file by the route using path package
  response.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/name/:enteredName", (request, response) => {
  console.log(request.params.enteredName);
  response.send(`Hello ${request.params.enteredName}`);
});

// Listening for open port
app.listen(portNumber, () => {
  console.log("App running on port:", portNumber);
});
