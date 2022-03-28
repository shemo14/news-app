import React from "react";
import { View } from 'react-native'
import { COLORS, moderateScale, scale, width } from "@common";
import { Container, SText, LangSwitchTab, ThemeSwitchTab } from '@components'
import {useSelector} from "react-redux";

export const  Settings = () => {
    const { theme } = useSelector((state) => state.general);
    const backgroundColor    = { backgroundColor: theme === 'light' ? COLORS.white : COLORS.mainDark }
    return (
        <Container header={true}>
            <SText title={'Settings'} style={{ fontSize: 20, marginVertical: 20 }} />
            <View style={[{ flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: scale(10),
                backgroundColor: COLORS.white,
                borderRadius: scale(10),
                width: width - scale(20),
                alignSelf: "center",
                marginBottom: moderateScale(15), }, backgroundColor]}>
                <SText title={'language'} />
                <LangSwitchTab containerStyle={backgroundColor} />
            </View>

            <View style={[{ flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: scale(10),
                backgroundColor: COLORS.white,
                borderRadius: scale(10),
                width: width - scale(20),
                alignSelf: "center",
                marginBottom: moderateScale(15), }, backgroundColor]}>
                <SText title={'Theme'} />
                <ThemeSwitchTab containerStyle={backgroundColor} />
            </View>
        </Container>
    )
}