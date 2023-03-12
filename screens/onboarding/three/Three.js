import { View, Text } from "react-native";

import Building from "../../../Assets/Svg/Onboarding/Three/Building";
import Vector from "../../../Assets/Svg/Onboarding/One/Vector";
import CompletionDots from "../../../Components/Onboarding/CompletionDots/CompletionDots";
import ContinueBtn from "../../../Components/Onboarding/ContinueBtn/ContinueBtn";

import { globalStyles } from "../../../Global/globalStyles";
import { styles as oneStyles } from "../One/styles";

export default function ThreeOnboarding({ navigation, ...props }) {
    return (
        <View style={globalStyles.container}>
            <View style={[oneStyles.vectorContainer, {marginBottom: "-6%"}]}>
                <Vector />
                <View style={[oneStyles.repositionMedical, {left: "16%"}]}>
                    <Building />
                </View>
            </View>
            <View style={oneStyles.headerTextContainer}>
                <Text style={oneStyles.headerText}>On the House!</Text>
            </View>
            <View style={oneStyles.textContainer}>
                <View style={oneStyles.captionTextContainer}>
                    <Text style={oneStyles.captionText}>Our tool is included with your insurance plan, no hidden fees.</Text>
                </View>
            </View>
            <View style={oneStyles.completionDotContainer}>
                <CompletionDots page="3"/>
            </View>
            <View style={oneStyles.continueBtnContainer}>
                <ContinueBtn type="final" navigation={navigation}/>
            </View>
        </View>
    );
}
