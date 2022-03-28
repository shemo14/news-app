import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { scale, IS_IOS, COLORS } from "@common";
import { Icon, SText } from '@components'
import { Home, Settings } from '@screens'
import I18n from '@locale'
import {useSelector} from "react-redux";
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    const insets = useSafeAreaInsets();
    const { theme } = useSelector((state) => state.general);
    const backgroundColor    = { backgroundColor: theme === 'light' ? COLORS.white : COLORS.mainDark }

    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: [backgroundColor, { borderWidth: 0, padding: 5 }],
            }}
        >

            <Tab.Screen
                name={"Home"}
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                iconStyle={{
                                    color: focused ? COLORS.secondary : COLORS.grayDark,
                                    fontSize: 30,
                                }}
                                type={"antDesign"}
                                name={"home"}
                            />
                            <SText title={'News'} style={{ color: focused ? COLORS.secondary : COLORS.grayDark,  }} />
                        </>
                    ),
                }}
            />

            <Tab.Screen
                name={"Settings"}
                component={Settings}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                        <Icon
                            iconStyle={{
                                color: focused ? COLORS.secondary : COLORS.grayDark,
                                fontSize: 30,
                            }}
                            type={"ionicons"}
                            name={"settings"}
                        />
                    <SText title={'Settings'} style={{ color: focused ? COLORS.secondary : COLORS.grayDark, }} />
                    </>
                    ),
                }}
            />

        </Tab.Navigator>
    );
};