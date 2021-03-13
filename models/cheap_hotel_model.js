const { mongo } = require("mongoose");

const mongoose = require("mongoose");
require("mongoose-type-url");

const cheap_hotel_schema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,
        reqiured: true,
        index: true
    },
    approved: {
        type: Boolean,
        required: true
    },
    subscribed: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        required: true,
        index: true
    },
    photos: {
        type: Array,
        required: true
    }, //arrays
    location: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    url: {
        type: mongoose.SchemaTypes.Url,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    reviews: {
        type: Array,
        required: true
    }, //array
    cities_operating: {
        type: Array,
        required: true,
        index: true
    }, //array
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    fax: {
        type: String,
        reqiured: true
    },
    number_of_ratings: {
        type: Number,
        required: true
    },
    number_of_reviews: {
        type :Number,
        required: true
    },
    amenities: {
        type: Array,
        required: true
    },
    sentiments: {
        type: Array,
        reqiured: true
    },
    policies_and_restrictions: {  //An array of objects, each object representing some type of policy and its information
        type: Array,
        reqiured: true
    }
});



const cheap_hotel = mongoose.model("cheap_hotel", cheap_hotel_schema);


module.exports = cheap_hotel;