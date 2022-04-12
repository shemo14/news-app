import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "@common";
import { Icon, SText } from '@components'
import { Home, Settings } from '@screens'
import I18n from '@locale'
import {useSelector} from "react-redux";
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    const { theme } = useSelector((state) => state.general);
    const backgroundColor = { backgroundColor: theme === 'dark' ? COLORS.mainDark : COLORS.white }

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
                            <SText title={I18n.t('common.news')} style={{ color: focused ? COLORS.secondary : COLORS.grayDark,  }} />
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
                    <SText title={I18n.t('settings')} style={{ color: focused ? COLORS.secondary : COLORS.grayDark, }} />
                    </>
                    ),
                }}
            />

        </Tab.Navigator>
    );
};