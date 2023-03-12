import React, { useState } from "react";
import { View, Pressable, Text } from "react-native";

import { styles } from "./styles";
import { sendHaptic } from "../../../Helpers/sendHaptic.js"


export default function Navbar({navigation, ...props}) {

    if(props.pageon == "signup") {
        

        function pressHandler2() {  
            sendHaptic();
            navigation.navigate("login");
        }

        function pressHandler() {
            sendHaptic();
        }

        return (
            <View style={styles.btnContainer}>
                <Pressable style={styles.signupContainer} onPress={pressHandler}>
                    <Text style={styles.navigationSignUpText}>Signup</Text>
                </Pressable>
                <Pressable style={styles.loginTextContainer} onPress={pressHandler2}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
            </View>
        );
    } else {
        
        function pressHandler2() {  
            sendHaptic();
            navigation.navigate("signup");
        }

        function pressHandler() {
            sendHaptic();
        }

        return (
            <View style={styles.btnContainer}>
                <Pressable style={styles.loginTextContainer} onPress={pressHandler2}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
                <Pressable style={[styles.signupContainer, {left: "75%"}]} onPress={pressHandler}>
                    <Text style={styles.navigationSignUpText}>Signup</Text>
                </Pressable>
            </View>
        );
    }
}