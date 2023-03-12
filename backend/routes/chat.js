const express = require("express");
const { getChats, addMessage, findAndDelete } = require("../functionality/db.js");

const chat = express.Router()

chat.use(express.json())

chat.post("/getMessages", async (req,res) => {

    try {
        if(req.body.userID) {

            const getChatRes = await getChats(req.body.userID, 20);

            if(getChatRes.status) {

                res.status(200).send({
                    "status": 200,
                    "message": "Messages Retrieved",
                    "data": getChatRes.data
                })

            } else {
                res.status(400).send({
                    "status": 400,
                    "message": "Error getting chats"
                })
            }


        } else {
            res.status(400).send({
                "status": 400,
                "message": "Missing Parameters"
            })
        }
    } catch(err) {
        res.status(500).send({
            "status": 500,
            "message": "Internal Server Error"
        })
    }


});

chat.post("/sendMessage", async (req,res) => {

    try {

        if(req.body.userID && req.body.message) {

            const getChatRes = await getChats(req.body.userID, 5);

            if(getChatRes.status) {

                const addMessageRes = await addMessage(req.body.userID, req.body.message, JSON.stringify(getChatRes.data));

                if(addMessageRes.status) {

                    res.status(200).send({
                        "status": 200,
                        "message": addMessageRes.message
                    })

                } else {
                    res.status(400).send({
                        "status": 400,
                        "message": "Error adding message"
                    })
                }

            } else {
                res.status(400).send({
                    "status": 400,
                    "message": "Error getting chats"
                })
            }

        } else {
            res.status(400).send({
                "status": 400,
                "message": "Missing Parameters"
            })
        }

    } catch (err) {
        console.log(err)
        res.status(500).send({
            "status": 500,
            "message": "Internal Server Error"
        })
    }
});

chat.post("/deleteMessages", async (req, res) => {

    try {

        if(req.body.userID) {

            const response = await findAndDelete(req.body.userID);

            if(response) {

                res.status(200).send({
                    "status": 200,
                    "message": "Cleared Chats"
                })

            } else {
                res.status(400).send({
                    "status": 400,
                    "message": "Error deleting messages"
                })
            }



        } else {
            res.status(400).send({
                "status": 400,
                "message": "Missing Parameters"
            })
        }

    } catch (err) {
        res.status(500).send({
            "status": 500,
            "message": "Internal Server Error"
        })
    }

});




module.exports = chat;