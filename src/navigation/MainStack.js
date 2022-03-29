import * as React from "react";
import { createStackNavigator, CardStyleInterpolators, } from "@react-navigation/stack";
import { ArticleDetails } from '../screens'
import { TabNavigator } from './TabNavigator'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                headerShown: false,
            }}
        >
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator };