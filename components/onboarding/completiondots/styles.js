import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    dotContainer: {
        flexDirection: "row"
    },
    dotConfig: {
        width: hp(1.5),
        height: hp(1.5),
        borderRadius: "100%",
        marginHorizontal: "2%",
        opacity: 0.8,
    }
});