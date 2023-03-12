import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    repositionMedical: {
        top: "-50%",
        left: "10%"
    },
    vectorContainer: {
        top: "-2%",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: hp(4),
    },
    textContainer: {
        top: "-12%",
    },
    captionTextContainer: {
        width: "90%",
    },
    captionText: {
        color: "#949494",
        fontWeight: "light",
        opacity: 0.8,
        textAlign: "center",
        fontSize: hp(2.25)
    },
    headerTextContainer: {
        top: "-15%"
    },
    completionDotContainer: {
        top: "-8%",
        marginBottom: "10%",
        alignContent: "center",
        alignItems: "center",   
    },
    continueBtnContainer: {
        top: "2.5%"
    }
});