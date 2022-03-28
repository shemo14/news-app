import React, { Fragment, useEffect, useState } from "react";
import { View, Text } from 'react-native'
import I18n from "@locale"
import { styles } from '../../styles'
import { SearchInput, SText } from '@components'
import { searchAction } from '../../store/Actions'
import {useDispatch, useSelector} from "react-redux";
import {COLORS} from "../../common";

export const  Header = () => {
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
        <View style={[styles.headerStyle, backgroundColor]}>
            <SearchInput
                value={search}
                onChangeText={(e) => onSearch(e)}
                IconName={"magnify"}
                placeholder={I18n.t("common.searchall")}
                containerStyle={styles.searchInput}
            />
        </View>
    )
}