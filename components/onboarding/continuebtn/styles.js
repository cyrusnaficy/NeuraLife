import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    continueBtnContainer: {
        backgroundColor: "#EC6060",
        paddingHorizontal: "30%",
        paddingVertical: "5%",
        borderRadius: "10%",
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#fff',
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    btnText: {
        color: "#FFFFFF",
        fontWeight: 600,
        fontSize: hp(3)
    }
});