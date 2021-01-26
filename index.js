console.log("Starting web app...");

const express = require("express");
const portNumber = 4000;

const app = express();
console.log("App created...Attempting to listen on port:", portNumber);

// ROUTES //

// Listen for open port
app.listen(portNumber, () => {
  console.log("App running on port:", portNumber);
});
