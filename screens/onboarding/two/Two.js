import { View, Text } from "react-native";

import Maps from "../../../Assets/Svg/Onboarding/Two/Maps";
import Vector from "../../../Assets/Svg/Onboarding/Two/Vector";
import CompletionDots from "../../../Components/Onboarding/CompletionDots/CompletionDots";
import ContinueBtn from "../../../Components/Onboarding/ContinueBtn/ContinueBtn";

import { globalStyles } from "../../../Global/globalStyles";
import { styles as oneStyles } from "../One/styles";

export default function TwoOnboardings({ navigation, ...props }) {
    return (
        <View style={globalStyles.container}>
            <View style={[oneStyles.vectorContainer, {marginBottom: "3%"}]}>
                <Vector />
                <View style={oneStyles.repositionMedical}>
                    <Maps />
                </View>
            </View>
            <View style={oneStyles.headerTextContainer}>
                <Text style={oneStyles.headerText}>Locate Appointments</Text>
            </View>
            <View style={oneStyles.textContainer}>
                <View style={oneStyles.captionTextContainer}>
                    <Text style={oneStyles.captionText}>Our AI uses GPS technology to guide you to the nearest doctors office.</Text>
                </View>
            </View>
            <View style={oneStyles.completionDotContainer}>
                <CompletionDots page="2"/>
            </View>
            <View style={oneStyles.continueBtnContainer}>
                <ContinueBtn type="2" navigation={navigation}/>
            </View>
        </View>
    );
}
