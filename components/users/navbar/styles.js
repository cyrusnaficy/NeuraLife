import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    btnContainer: {
        width: "60%",
        height: "7.5%", 
        backgroundColor: "#fff",
        borderColor: "#EC6060",
        borderWidth: "3%",
        borderRadius: "28%",
        flexDirection: "row"
    },
    signupContainer: {
        width: "60%",
        height: "101%", 
        backgroundColor: "#EC6060",
        borderRadius: "20%",
    },
    navigationSignUpText: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        fontSize: hp(2.5),
        fontWeight: "bold",
        top: "30%"
    },
    loginTextContainer: {
        top: "7%",
        left: "25%"
    },
    loginText: {
        alignContent: "flex-end",
        justifyContent: "flex-end",
        textAlign: "right",
        fontSize: hp(2.5),
        color: "#EC6060",
        fontWeight: "bold",
    }
});