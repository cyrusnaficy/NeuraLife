import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import * as Location from "expo-location";

import { sendHaptic } from "../../../Helpers/sendHaptic.js" 
import { styles } from "./styles.js"
import { sendError } from "../../../Helpers/errorHandler.js"
import { createItem } from "../../../Helpers/secureStore.js";

export default function ContinueBtn({navigation, ...props}) {

    if(props.type != "final") {
        var btnText = "Continue";
    } else {
        var btnText = "Sign Up";
    }

    async function pressHandler() {
        sendHaptic();

        if(props.type != "signup") {

            if(props.type == "1") {
                navigation.navigate("onboarding2");
            } else if(props.type == "2") {

                let { status } = await Location.requestForegroundPermissionsAsync();

                if (status !== "granted") {
                    sendError("Error: Permission to access location was denied");
                } else {
    
                    let locationData = await Location.getCurrentPositionAsync({
                        accuracy: Location.Accuracy.Low,
                    });

                    createItem("location", JSON.stringify([
                        JSON.stringify(locationData.coords.latitude),
                        JSON.stringify(locationData.coords.longitude)
                    ]));

                }


                navigation.navigate("onboarding3");
            } else {
                navigation.navigate("signup");
            }
        } else {

            if(props.firstName == "" || props.lastName == "" || props.email == "" || props.password == "") {
                sendError("Error: Please fill out all fields");
                return;
            }

        }
    }

    return (
        <TouchableOpacity style={styles.continueBtnContainer} onPress={pressHandler}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    )

}