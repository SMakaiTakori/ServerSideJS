console.log("Starting web app...");

const express = require("express");
const portNumber = 4000;
const path = require("path");

const app = express();
console.log("App created...Attempting to listen on port:", portNumber);

// ROUTES //

// app.get("/", (request, response) => {
//   console.log(request);
//   response.send("Hello World!");
// });

app.get("/", (request, response) => {
  app.use(express.static("public"));
  response.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/name/:enteredName", (request, response) => {
  console.log(request.params.enteredName);
  response.send(`Hello ${request.params.enteredName}`);
});

// Listen for open port
app.listen(portNumber, () => {
  console.log("App running on port:", portNumber);
});
