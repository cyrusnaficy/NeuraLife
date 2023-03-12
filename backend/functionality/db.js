const mongoose = require("mongoose");

const addUserSchema = require("../query/userschema.js") 
const addChatSchema = require("../query/chatschema.js")
const { sendOpenAi } = require("./ai/gpt.js");

async function addUser(userObj) {

    let returnVal = false;

    try {
        
        const newUser = new addUserSchema(userObj);

        const saveRes = await newUser.save();

        returnVal = saveRes ? true: false;

    } catch (err) {}

    return returnVal;
}

async function findOne(query) {
    try {
        var user = await addUserSchema.findOne(query);
    } catch (err) {}

    return user;
}

async function getChats(userID, indexType) {

    let returnVal = {
        "status": false,
        "data": []
    }

    try {

        const chatData = await addChatSchema.findOne({ userID: userID });

        if(chatData) {
            returnVal.status = true;
            returnVal.data = chatData.messages.slice(-indexType);
        } else {
            const newChat = new addChatSchema({
                userID: userID,
                messages: []
            });

            const saveRes = await newChat.save();

            if(saveRes) {
                returnVal.status = true;
            }
        }

    } catch (err) {}

    return returnVal;

}

async function addMessage(userID, message, previousMessages) {

    let returnVal = {
        "status": false,
        "message": null
    }

    try {

        let chatData = await addChatSchema.findOne({ userID: userID });

        chatData.messages.push(`${message}:user`);

        const getUserLatitude = await addUserSchema.findOne({ userID: userID });

        const chatGPTResponse = await sendOpenAi(message, previousMessages, getUserLatitude.zipcode);

        if(chatGPTResponse.status) {

            returnVal.message = chatGPTResponse.message;
            chatData.messages.push(`${returnVal.message}:ai`);

            const updateModel = await addChatSchema.findOneAndUpdate({userID: userID}, chatData, {
                new: true
            });

            if(updateModel) {
                returnVal.status = true;
            }
        }

    } catch (err) {}

    return returnVal;

}

async function findAndDelete(userID) {

    let returnVal = false;

    try {

        let chatData = {
            messages: []
        }

        const updateModel = await addChatSchema.findOneAndUpdate({userID: userID}, chatData, {
            new: true
        });

        if(updateModel) {
            returnVal = true;
        }

    } catch (err) {};

    
    return returnVal;
}

module.exports = {addUser, findOne, getChats, addMessage, findAndDelete};