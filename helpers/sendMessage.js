import { showMessage } from "react-native-flash-message";

export async function sendMessage(message) {
    showMessage({
        message: message,
        backgroundColor: "#1a86c5",
        color: "white",
    });
}