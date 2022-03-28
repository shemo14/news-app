import React, { useEffect } from "react";
import { View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackNavigator } from "./MainStack";
import { useDispatch } from "react-redux";
import { useNetInfo } from "@react-native-community/netinfo";
import { networkChangedAction } from "../store/Actions";

const RootStack = createStackNavigator();

const RootStackScreen = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false, }} >
            <RootStack.Screen
                name="MainStackNavigator"
                component={MainStackNavigator}
                options={{ animationEnabled: false, }}
            />
        </RootStack.Navigator>
    )
}

const RootNavigator = () => {
    const dispatch = useDispatch();

    const netInfo = useNetInfo();

    useEffect(() => {
        netInfo.isInternetReachable != null &&
        dispatch(networkChangedAction(netInfo.isInternetReachable));
    }, [netInfo]);

    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer >
                <RootStackScreen />
            </NavigationContainer>
        </View>
    );
};

export { RootNavigator };

