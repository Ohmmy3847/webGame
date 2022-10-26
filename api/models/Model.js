const mongoose = require("mongoose");
// A Mongoose schema defines the structure of the document,
// default values, validators, etc.
const { Schema } = mongoose;
const DataSchema = new Schema({
  _id: {
    type: String,
  },
  Gamename: {
    type: String,
  },
  Link: {
    type: String,
  },
  Image: {
    type: String,
  },
});

module.exports = mongoose.model("Game", DataSchema, "Game");
