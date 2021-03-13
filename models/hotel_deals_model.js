const mongoose = require("mongoose");

const hotels_deals_schema = mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,
        reqiured: true,
        index: true
    },
    hotel_name: {
        type: String,
        required: true
    },
    hotel_rating: {
        type: Number,
        required: true
    },
    hotel_reviews: {
        type: Array
    },
    hotel_number_of_reviews: {
        type: Number
    },
    deal_checkin_date: {
        type: Date,
        required: true
    },
    deal_checkout_date: {
        type: Date,
        required: true
    },
    deal_description: {
        type: String,
        required: true
    },
    deal_current_discounted_price: {
        type: Number,
        required: true
    },
    deal_original_price: {
        type: Number,
        required: true
    },
    deal_room_information: {
        type: Object,
        required: true
    }
});