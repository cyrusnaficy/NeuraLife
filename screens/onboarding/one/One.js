import { View, Text } from "react-native";

import Medical from "../../../Assets/Svg/Onboarding/One/Medical.js";
import Vector from "../../../Assets/Svg/Onboarding/One/Vector.js";
import ContinueBtn from "../../../Components/Onboarding/ContinueBtn/ContinueBtn.js";
import CompletionDots from "../../../Components/Onboarding/CompletionDots/CompletionDots.js";

import { styles } from "./styles.js"
import { globalStyles } from "../../../Global/globalStyles.js";

export default function OneOnboarding({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <View style={styles.vectorContainer}>
                <Vector/>
                <View style={styles.repositionMedical}>
                    <Medical/>
                </View>
            </View>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Your 24/7 Physician</Text>
            </View>
            <View style={styles.textContainer}>
                <View style={styles.captionTextContainer}>
                    <Text style={styles.captionText}>Our advanced AI technology can answer your medical questions with ease.</Text>
                </View>
            </View>
            <View style={styles.completionDotContainer}>
                <CompletionDots page="1"/>
            </View>
            <View style={styles.continueBtnContainer}>
                <ContinueBtn type="1" navigation={navigation}/>
            </View>
        </View>
    )
}