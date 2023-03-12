const mongoose = require('mongoose');
const express = require('express');
const users = require("./routes/users");
const chat = require("./routes/chat");

const app = express();
const port = process.env.PORT || 4000;

async function runServer() {
    
    mongoose.set("strictQuery", false);
    
    await mongoose.connect("<RETRACTED>", {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => {
            console.log("MongoDB Connected")
        })
        .catch((err) => {
            console.error(err)
        })


    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use("/api/users", users);
    app.use("/api/chat", chat)

    app.get("/", async (req,res) => {
        res.send("Test")
    });

    app.listen(port, () => {
        console.log("Server is running on port 4000")
    });

}

runServer();