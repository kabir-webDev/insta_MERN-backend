const express = require("express");
const app = express();
const PORT = 5000;

const middleHandle = (req, res, next) => {
  console.log("Walah Middleware");
  next();
};

app.get("/", middleHandle, (req, res) => {
  console.log("Boom!!");
  res.send("Landing");
});

app.get("/langs", (req, res) => {
  console.log("Not Boom!!");
  res.send("In the langs in the baga buga");
});

app.listen(PORT, () => {
  console.log("Ekhane run hoitese: ", PORT);
});
