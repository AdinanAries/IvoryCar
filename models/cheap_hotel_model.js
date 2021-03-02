const { mongo } = require("mongoose");

const mongoose = require("mongoose");

const cheap_hotel_schema = new mongoose.Schema({
    name: {},
    images: {}, //arrays
    location: {},
    rating: {},
    url: {},
    description: {},
    price: {},
    currency: {},
    reviews:{}, //array
    cities_operating: {}, //array
    email: {},
    mobile: {},
});

const cheap_hotel = mongoose.model("cheap_hotel", cheap_hotel_schema);


module.exports = cheap_hotel;