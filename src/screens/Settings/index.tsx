import React from "react";
import { View } from 'react-native'
import { COLORS } from "@common";
import { styles } from '../../styles'
import { Container, SText, LangSwitchTab, ThemeSwitchTab, Header } from '@components'
import {useSelector} from "react-redux";
import I18n from "@locale"

export const  Settings = () => {
    const { theme } = useSelector((state) => state.general);
    const backgroundColor    = { backgroundColor: theme === 'dark' ? COLORS.mainDark : COLORS.white }
    return (
        <View style={{ flex: 1 }}>
            <Header title={I18n.t('settings')} />

            <Container header={true} style={{ paddingTop: 20 }}>
                <View style={[ styles.settingsTab , backgroundColor]}>
                    <SText title={I18n.t('common.lang')} />
                    <LangSwitchTab containerStyle={backgroundColor} />
                </View>

                <View style={[ styles.settingsTab , backgroundColor]}>
                    <SText title={I18n.t('common.theme')} />
                    <ThemeSwitchTab containerStyle={backgroundColor} />
                </View>
            </Container>
        </View>
    )
}