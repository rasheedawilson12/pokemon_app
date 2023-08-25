const express = require("express");
const app = express();
const PORT = 3000;
require("dotenv").config();
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Poke = require("./models/poke.js");
const pokemon = require("./models/pokemon.js");

// -----------------------------{Middleware}
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
// app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use((req, res, next) => {
  next();
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", async (req, res) => {
  let allPokemon = await Poke.find({});
  await res.render("Index", {
    pokemon: allPokemon,
  });
});

app.post("/pokemon", async (req, res) => {
  if (req.body.readyToTrain === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToTrain = true;
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToTrain = false;
  }
  const newPokemon = await Poke.create(req.body);
  // await res.send(newPokemon);
  console.log(pokemon);
  res.redirect("/pokemon");
});

// --------------------------------------{NEW}

//put this above your Show route
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

// ------------------------------------------------{DELETE}

app.delete("/pokemon/:id", async (req, res) => {
  await Poke.findByIdAndRemove(req.params.id);
  res.redirect("/pokemon"); //redirect back to pokemon index
});

app.put("/pokemon/:id", async (req, res) => {
  if (req.body.readyToTrain === "on") {
    req.body.readyToTrain = true;
  } else {
    req.body.readyToTrain = false;
  }
  const updatedPokemon = await Poke.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/pokemon/${req.params.id}`);
});

// ---------------------------------------------------------{EDIT}
app.get("/pokemon/:id/edit", async (req, res) => {
  const foundPokemon = await Poke.findById(req.params.id);
  res.render("Edit", { pokemon: foundPokemon });
});

app.get("/pokemon/:id", async (req, res) => {
  const eachPokemon = await Poke.findById(req.params.id);
  await res.render("Show", { pokemon: eachPokemon });
});

// ------------------------------{Show => Each fruit}

app.listen(PORT, (req, res) => {
  console.log(`Server ${PORT} is listening`);
});
// -------------------------{server}
