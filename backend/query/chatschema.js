const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    messages: {
        type: Array,
        required: true
    }
})

const addChatSchema = mongoose.model("Chats", chatSchema);

module.exports = addChatSchema;
