const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  img: { type: String, required: false },
  readyToTrain: Boolean,
});

const Poke = mongoose.model("Poke", pokemonSchema);

module.exports = Poke;
