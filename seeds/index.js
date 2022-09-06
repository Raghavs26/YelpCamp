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
  for (let i = 0; i < 300; i++) {
    const randomCity = Math.floor(Math.random() * cities.length);
    const price = Math.floor(Math.random() * 20) + 10;
    const { city, state } = cities[randomCity];
    const camp = new Campground({
      author: "63159ce57031e95749b19cce",
      location: `${city}, ${state}`,
      title: `${random(descriptors)} ${random(places)}`,
      images: [
        {
          url: "https://res.cloudinary.com/dtdjkkv62/image/upload/v1643726374/YelpCamp/lozjschpy4ljp2xonlao.jpg",
          filename: "YelpCamp/lozjschpy4ljp2xonlao",
        },
        {
          url: "https://res.cloudinary.com/dtdjkkv62/image/upload/v1643726378/YelpCamp/mi1rmgc5akzzllzkp1kw.jpg",
          filename: "YelpCamp/mi1rmgc5akzzllzkp1kw",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis nesciunt magni, laboriosam adipisci officia in, qui tempora dolor voluptates animi id ab expedita. Iure non repellat est sit exercitationem!",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[randomCity].longitude,
          cities[randomCity].latitude,
        ],
      },
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close;
});
