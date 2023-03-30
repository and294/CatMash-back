const mongoose = require("mongoose");

const voteSchema = mongoose.Schema({
  vote: Number,
});

const Vote = mongoose.model("votes", voteSchema);

module.exports = Vote;