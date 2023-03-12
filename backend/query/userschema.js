const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    }
})

const addUserSchema = mongoose.model("Users", userSchema);

module.exports = addUserSchema;
