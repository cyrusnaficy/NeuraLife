const express = require("express");
const db = require("../functionality/db.js");
const { v4: uuidv4 } = require('uuid');
const { getAddress } = require('../functionality/gps/getAddress.js');

const signUp = express.Router()

signUp.use(express.json())

signUp.post("/loginHandler", async (req,res) => {

    try {
    
        if(req.body.email && req.body.password) {

            let user = false;

            try {
                user = await db.findOne({email: req.body.email});
            } catch (err) {
                user = false;
            }

            if(user) {

                if(user.password === req.body.password) {

                    res.status(200).send({
                        "status": 200,
                        "message": "Login Was Successful!",
                        "data": {
                            "firstName": user.firstName,
                            "lastName": user.lastName,
                            "email": user.email,
                            "password": user.password,
                            "userID": user.userID
                        }
                    });

                } else {
                    res.status(401).send({
                        "status": 401,
                        "message": "Invalid Password"
                    });
                }

            } else {

                const realAddy = await getAddress(req.body.location[0], req.body.location[1])

                const userID = uuidv4();

                const userObject = {
                    userID: userID,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    zipcode: realAddy
                };

                const isSuccess = await db.addUser(userObject);

                if(isSuccess) {

                    res.status(200).send({
                        "status": 200,
                        "message": "User added successfully",
                        "data": {
                            "firstName": req.body.firstName,
                            "lastName": req.body.lastName,
                            "email": req.body.email,
                            "password": req.body.password,
                            "userID": userID
                        }
                    });

                } else {
                    res.status(400).send({
                        "status": 400,
                        "message": "Error Signing Up"
                    });
                }
            }

        } else {
            res.status(400).send({
                "status": 400,
                "message": "Missing Parameters"
            });
        }

    } catch (err) {

        console.log(err)
        
        res.status(500).send({
            "status": "500",
            "message": "Internal server error"
        });
    }
});

module.exports = signUp