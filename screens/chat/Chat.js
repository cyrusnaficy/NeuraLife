import React, { useState, useRef, useEffect } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    RefreshControl,
    Keyboard,
} from "react-native";
import * as Speech from "expo-speech";
import * as Clipboard from "expo-clipboard";

import Send from "../../Assets/Svg/Chat/Send";
import Robot from "../../Assets/Svg/Chat/Robot";
import Trash from "../../Assets/Svg/Chat/Trash";

import { clearChats } from "../../API/clearChats";
import { getChats } from "../../API/getChats";
import { sendChat } from "../../API/sendChat";
import { sendHaptic } from "../../Helpers/sendHaptic";
import { sendMessage } from "../../Helpers/sendMessage";
import { styles } from "./styles";

const speechOptions = {
    language: "en-US",
    quality: Speech.VoiceQuality.Enhanced,
};

const Chat = ({ navigation, ...props }) => {
    const [chatInput, setChatInput] = useState("");
    let [chatLog, setChatLog] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isSpeakerOn, setIsSpeakerOn] = useState(false);
    const [speakerOpacity, setSpeakerOpacity] = useState(0.6);
    const scrollViewRef = useRef();

    async function clearChatsHandler() {
        sendHaptic();

        const response = await clearChats();

        if (response) {
            setChatLog([]);

            const string = "Hello, I'm Neurie. How can I help you?";
            let newString = "";
            let index = 0;

            const interval = setInterval(() => {
                if (newString === string) {
                    clearInterval(interval);
                    return;
                }

                newString += string[index];
                index++;

                setChatLog([{ user: false, message: newString }]);
            }, 20);

            return () => clearInterval(interval);
        }
    }

    async function onRefresh() {
        setRefreshing(true);

        const response = await getChats();

        if (response.data) {
            let totalAdd = [
                {
                    user: false,
                    message: "Hello, I'm Neurie. How can I help you?",
                },
            ];

            for (let i = 0; i < response.data.length; i++) {
                let chatStr = response.data[i].split(":");

                let userVal = false;

                if (chatStr[1] == "user") {
                    userVal = true;
                }

                totalAdd.push({ user: userVal, message: chatStr[0] });
            }

            setChatLog(totalAdd);
        }

        setRefreshing(false);
    }

    useEffect(() => {
        if (JSON.stringify(props.route.params.data) != "[]") {
            let totalAdd = [
                {
                    user: false,
                    message: "Hello, I'm Neurie. How can I help you?",
                },
            ];

            for (let i = 0; i < props.route.params.data.length; i++) {
                let chatStr = props.route.params.data[i].split(":");

                let userVal = false;

                if (chatStr[1] == "user") {
                    userVal = true;
                }

                while (
                    chatStr[0].startsWith("\n") ||
                    chatStr[0].startsWith("\r")
                ) {
                    chatStr[0] = chatStr[0].substring(1);
                }

                chatStr[0] = chatStr[0].replace(":ai", "");
                chatStr[0] = chatStr[0].replace(":user", "");

                totalAdd.push({ user: userVal, message: chatStr[0] });
            }

            setChatLog(totalAdd);
        } else {
            const string = "Hello, I'm Neurie. How can I help you?";
            let newString = "";
            let index = 0;

            const interval = setInterval(() => {
                if (newString === string) {
                    clearInterval(interval);
                    return;
                }

                newString += string[index];
                index++;

                setChatLog([{ user: false, message: newString }]);
            }, 20);

            return () => clearInterval(interval);
        }
    }, []);

    const handleChatInputChange = (text) => {
        setChatInput(text);
    };

    const handleChatSubmit = async () => {
        const chatInputCopy = chatInput;

        setChatInput("");
        sendHaptic();

        if (chatInputCopy.length > 0) {
            setChatLog([
                ...chatLog,
                { user: true, message: chatInputCopy },
                { user: false, message: "..." },
            ]);

            let response = await sendChat(chatInputCopy);

            if (response.message != "") {
                while (
                    response.message.startsWith("\n") ||
                    response.message.startsWith("\r")
                ) {
                    response.message = response.message.substring(1);
                }

                response.message = response.message.replace(":ai", "");
                response.message = response.message.replace(":user", "");

                if (isSpeakerOn) {
                    Speech.speak(response.message, speechOptions);
                }

                let newString = "";
                let index = 0;

                setChatLog((prevChatLog) => [
                    ...prevChatLog.slice(0, -1),
                    { user: false, message: newString },
                ]);

                const interval = setInterval(() => {
                    if (newString === response.message) {
                        clearInterval(interval);
                        return;
                    }

                    newString += response.message[index];
                    index++;

                    setChatLog((prevChatLog) => {
                        const lastItem = prevChatLog[prevChatLog.length - 1];
                        const modifiedItem = {
                            ...lastItem,
                            message: newString,
                        };
                        return [...prevChatLog.slice(0, -1), modifiedItem];
                    });
                }, 20);

                return () => clearInterval(interval);
            } else {
                setChatLog((prevChatLog) => [
                    ...prevChatLog.slice(0, -1),
                    { user: false, message: newString },
                ]);
                setChatLog([
                    ...chatLog,
                    {
                        user: false,
                        message: "I'm sorry, There was an error on my end.",
                    },
                ]);
            }
        }
    };

    function robotPressHandler() {
        sendHaptic();
        sendMessage(
            "Neurie is an advanced medical assistant. They can help you with a variety of medical questions to save you time instead of waiting hours for the doctor."
        );
    }

    function startSpeaker() {
        sendHaptic();

        if (!isSpeakerOn) {
            const thingToSay = "Hello, I'm Neurie. How can I help you?";
            Speech.speak(thingToSay, speechOptions);
            setSpeakerOpacity(1);
            setIsSpeakerOn(true);
        } else {
            Speech.speak("Audio Off", speechOptions);
            Speech.stop();
            setSpeakerOpacity(0.6);
            setIsSpeakerOn(false);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.profilePictureContainer}
                    onPress={robotPressHandler}
                >
                    <Robot />
                </TouchableOpacity>
                <View style={styles.chatbotInfoContainer}>
                    <Text style={styles.headerText}>Neurie</Text>
                    <Text style={styles.serverStatus}>Connected to server</Text>
                </View>
                <TouchableOpacity
                    style={{ top: "1%", left: "0%", padding: 20 }}
                    onPress={startSpeaker}
                >
                    <View
                        style={{
                            height: 15,
                            width: 15,
                            backgroundColor: "#19e4eb",
                            borderRadius: 40,
                            marginBottom: 5,
                            opacity: speakerOpacity,
                        }}
                    />
                    <View
                        style={{
                            height: 15,
                            width: 15,
                            backgroundColor: "#11a03a",
                            borderRadius: 40,
                            marginBottom: 5,
                            opacity: speakerOpacity,
                        }}
                    />
                    <View
                        style={{
                            height: 15,
                            width: 15,
                            backgroundColor: "#c01caa",
                            borderRadius: 40,
                            marginBottom: 5,
                            opacity: speakerOpacity,
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomBar} />
            <ScrollView
                style={styles.chatLogContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        progressBackgroundColor="#a4a4a4"
                        tintColor="#a4a4a4"
                    />
                }
                contentContainerStyle={styles.chatLogContentContainer}
                ref={scrollViewRef}
                onContentSizeChange={() =>
                    scrollViewRef.current.scrollToEnd({ animated: true })
                }
                showsVerticalScrollIndicator={false}
            >
                {chatLog.map((log, index) => {
                    const color = log.user ? "#fff" : "#000";

                    async function copyClipBoard() {
                        await Clipboard.setStringAsync(log.message);
                        sendMessage("Copied to clipboard!");
                    }

                    return (
                        <TouchableWithoutFeedback
                            key={index}
                            onLongPress={copyClipBoard}
                        >
                            <View
                                key={index}
                                style={[
                                    styles.chatBubble,
                                    log.user
                                        ? styles.userChatBubble
                                        : styles.chatbotChatBubble,
                                ]}
                            >
                                <Text
                                    style={[styles.chatText, { color: color }]}
                                >
                                    {log.message}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </ScrollView>
            <View style={styles.keyboardBottom}>
                <View
                    style={[
                        styles.bottomBar,
                        { marginBottom: "10%", top: "18%" },
                    ]}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.chatInput}
                        placeholder="Type a message..."
                        value={chatInput}
                        onChangeText={handleChatInputChange}
                        onSubmitEditing={() => {
                            Keyboard.dismiss();
                            if (chatInput != "") {
                                handleChatSubmit();
                            }
                        }}
                    />
                    <TouchableOpacity
                        style={[styles.chatButton, { marginRight: "3%" }]}
                        onPress={clearChatsHandler}
                    >
                        <View style={{ left: "0%" }}>
                            <Trash />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.chatButton}
                        onPress={handleChatSubmit}
                    >
                        <View style={{ left: "5%" }}>
                            <Send />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Chat;
