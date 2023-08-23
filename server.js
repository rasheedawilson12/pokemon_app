const express = require("express");
const app = express();
const PORT = 3000;

const pokemon = require("./models/pokemon");

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.listen(PORT, (req, res) => {
  console.log(`Server ${PORT} is listening`);
});
