import { View } from "react-native";

import { styles } from "./styles";

export default function CompletionDots({navigation, ...props}) {

    if(props.page == "1") {
        var configDots = ["#EC6060", "#ECEBED", "#ECEBED"];
    } else if(props.page == "2") {
        var configDots = ["#ECEBED", "#EC6060", "#ECEBED"];
    } else {
        var configDots = ["#ECEBED", "#ECEBED", "#EC6060"];
    }

    return (
        <View style={styles.dotContainer}>
            <View style={[styles.dotConfig, {backgroundColor: configDots[0]}]}/>
            <View style={[styles.dotConfig, {backgroundColor: configDots[1]}]}/>
            <View style={[styles.dotConfig, {backgroundColor: configDots[2]}]}/>
        </View>
    )

}