const mongoose = require("mongoose");
require("mongoose-type-url");

const login_user_schema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        index: true,
        max: 255,
        min: 8
    }
})

module.exports = new mongoose.model("login_user", login_user_schema);