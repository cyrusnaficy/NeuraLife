import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EC6060"
    },
    textInputContainer: {
        top: "2.5%"
    },
    form: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 40,
        width: "90%",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#EC6060",
        marginBottom: 20,
        textAlign: "center",
        fontFamily: "Arial Rounded MT Bold",
    },
    input: {
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 30,
        fontSize: 20,
        fontFamily: "Arial",
        borderWidth: 1,
        borderColor: "#EC6060",
    },
    button: {
        backgroundColor: "#EC6060",
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignSelf: "center",
        marginTop: 20,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        fontFamily: "Arial Rounded MT Bold",
    },
});