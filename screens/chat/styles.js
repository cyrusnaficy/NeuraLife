import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
        paddingTop: 50,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        marginBottom: 16,
    },
    profilePictureContainer: {
        backgroundColor: "#E5E5EA",
        borderRadius: 100,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
    },
    profilePicture: {
        fontSize: 24,
    },
    chatbotInfoContainer: {
        flex: 1,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 4,
    },
    serverStatus: {
        fontSize: 16,
        color: "#28a745",
    },
    infoButton: {
        backgroundColor: "#fff",
        borderRadius: 100,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 5,
        right: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 1,
    },
    line: {
        borderBottomColor: "#E5E5EA",
        borderBottomWidth: 1,
        marginBottom: "10%",
    },
    chatLogContainer: {
        top: "2.5%",
        flex: 1,
    },
    chatLogContentContainer: {
        paddingBottom: 100,
    },
    chatBubble: {
        backgroundColor: "#E5E5EA",
        borderRadius: 20,
        maxWidth: "80%",
        padding: 10,
        marginBottom: 16,
    },
    userChatBubble: {
        backgroundColor: "#EC6060",
        alignSelf: "flex-end",
    },
    chatbotChatBubble: {
        backgroundColor: "#E5E5EA",
        alignSelf: "flex-start",
    },
    chatText: {
        fontSize: 20,
    },
    inputContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    chatInput: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
        fontSize: 20,
    },
    chatButton: {
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    chatButtonIcon: {
        fontSize: 24,
    },
    speechButton: {
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    speechButtonIcon: {
        fontSize: 24,
    },
    bottomBar: {
        height: 1,
        width: "120%",
        backgroundColor: "#E5E5EA",
        left: "-10%",
    },
    keyboardBottom: {
        marginBottom: "5%",
    },
});
