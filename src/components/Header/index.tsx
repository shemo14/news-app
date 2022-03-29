import React, { Fragment, useEffect, useState } from "react";
import { View, TouchableOpacity } from 'react-native'
import I18n from "@locale"
import { styles } from '../../styles'
import { SearchInput, SText, Icon } from '@components'
import { searchAction } from '../../store/Actions'
import {useDispatch, useSelector} from "react-redux";
import {COLORS} from "../../common";

export const  Header = ({ headerStyles, screen, navigation }) => {
    const [search, setSearch]   = useState("");
    const dispatch              = useDispatch();
    const [loading, setLoading] = useState(false);
    const { theme } = useSelector((state) => state.general);
    const backgroundColor    = { backgroundColor: theme === 'light' ? COLORS.white : COLORS.mainDark }

    const onSearch = (e) => {
        setLoading(true)
        setSearch(e)
        dispatch(searchAction(setLoading, e))
    }

    return (
        <View style={[styles.headerStyle, backgroundColor, headerStyles]}>
            {
                screen === 'Home' ?
                    <SearchInput
                        value={search}
                        onChangeText={(e) => onSearch(e)}
                        IconName={"magnify"}
                        placeholder={I18n.t("common.searchall")}
                        containerStyle={styles.searchInput}
                    /> :
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: COLORS.main, alignSelf: 'flex-end', margin: 20, justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 2 }}>
                        <Icon type={'Ionicons'} name={'chevron-back'} />
                    </TouchableOpacity>
            }

        </View>
    )
}