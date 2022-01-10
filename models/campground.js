const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CampgroundSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  location: String,
  image: String,
});

module.exports = model("campground", CampgroundSchema);
