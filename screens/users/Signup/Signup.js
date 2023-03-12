import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator,
} from "react-native";

import { styles } from "./styles";
import { signUp } from "../../../API/signUp";
import { sendError } from "../../../Helpers/errorHandler";
import { getItem, createItem } from "../../../Helpers/secureStore";
import { sendHaptic } from "../../../Helpers/sendHaptic";

const SignupPage = ({ navigation }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitTxt, setSubmitTxt] = useState(
        <Text style={styles.buttonText}>Sign Up</Text>
    );

    const handleSignup = async () => {
        sendHaptic();

        if (
            firstName == "" ||
            lastName == "" ||
            email == "" ||
            password == "" ||
            !email.includes("@")
        ) {
            sendError("Error: Please fill out all fields");
            return;
        } else {
            let totalData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                location: JSON.parse(await getItem("location")),
            };

            setSubmitTxt(<ActivityIndicator size={"small"} color={"#ffff"} />);

            const response = await signUp(totalData);

            if (response.status) {
                await createItem("userID", response.userID);
                navigation.navigate("splash");
            } else {
                sendError("Error: Invalid username or password");
            }

            setSubmitTxt(<Text style={styles.buttonText}>Sign Up</Text>);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                enabled
            >
                <View style={styles.container}>
                    <View style={styles.form}>
                        <Text style={styles.header}>Sign Up</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="First Name"
                                textContentType="givenName"
                                onChangeText={setFirstName}
                                value={firstName}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Last Name"
                                textContentType="familyName"
                                onChangeText={setLastName}
                                value={lastName}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                onChangeText={setEmail}
                                textContentType="emailAddress"
                                value={email}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry
                                onChangeText={setPassword}
                                textContentType="password"
                                value={password}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSignup}
                        >
                            {submitTxt}
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default SignupPage;
