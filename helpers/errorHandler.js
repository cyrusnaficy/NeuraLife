import { showMessage } from "react-native-flash-message";

export async function sendError(error) {
    showMessage({
        message: error,
        backgroundColor: "#9a1212",
        color: "white",
    });
}