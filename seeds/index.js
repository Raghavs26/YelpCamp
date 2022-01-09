const mongoose = require("mongoose");

const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const randomCity = Math.floor(Math.random() * cities.length);
    const { city, state } = cities[randomCity];
    const camp = new Campground({
      location: `${city}, ${state}`,
      title: `${random(descriptors)} ${random(places)}`,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close;
});
