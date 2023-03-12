import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { StatusBar } from "expo-status-bar";
import { Asset } from "expo-asset";
import { getItem, removeItem } from "./Helpers/secureStore";

import OneOnboarding from "./Screens/Onboarding/One/One";
import TwoOnboarding from "./Screens/Onboarding/Two/Two";
import ThreeOnboarding from "./Screens/Onboarding/Three/Three";
import Signup from "./Screens/Users/Signup/Signup";
import Chat from "./Screens/Chat/Chat";
import SplashScreen from "./Screens/Splash/Splash";

const Stack = createNativeStackNavigator();

export default function App() {
    const [isAuthed, setIsAuthed] = useState(false);

    useEffect(() => {
        async function checkAuth() {
            // await removeItem("userID")
            setIsAuthed(await getItem("userID"));
        }

        checkAuth();
    }, []);

    async function loadAssets() {
        await Promise.all([
            Asset.loadAsync([require("./Assets/background.png")]),
        ]);
    }

    loadAssets();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    //gestureEnabled: false,
                }}
            >
                {!isAuthed ? (
                    <>
                        <Stack.Screen
                            name="onboarding1"
                            component={OneOnboarding}
                        />
                        <Stack.Screen
                            name="onboarding2"
                            component={TwoOnboarding}
                        />
                        <Stack.Screen
                            name="onboarding3"
                            component={ThreeOnboarding}
                        />
                        <Stack.Screen name="signup" component={Signup} />
                    </>
                ) : null}
                <Stack.Screen name="splash" component={SplashScreen} />
                <Stack.Screen name="chat" component={Chat} />
            </Stack.Navigator>
            <FlashMessage position="top" />
            <StatusBar style="dark" />
        </NavigationContainer>
    );
}
