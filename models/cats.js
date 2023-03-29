const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
  url: String,
  id: String,
  vote: Number,
});

const Cat = mongoose.model("cats", catSchema);

module.exports = Cat;