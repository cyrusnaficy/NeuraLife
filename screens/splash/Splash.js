import React, { useState, useEffect } from "react";
import { View } from "react-native";

import Robot from "../../Assets/Svg/Splash/Robot";

import { getChats } from "../../API/getChats";
import { globalStyles } from "../../Global/globalStyles";

export default function SplashScreen({ navigation, ...props }) {
    useEffect(() => {
        async function renderChats() {
            const response = await getChats();

            if (response.data) {
                navigation.navigate("chat", {
                    data: response.data,
                });
            } else {
                navigation.navigate("chat", {
                    data: response.data,
                });
            }
        }

        renderChats();
    }, []);

    return (
        <View style={[globalStyles.container, { backgroundColor: "#fff" }]}>
            <Robot />
        </View>
    );
}
