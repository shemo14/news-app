import React, { useState } from "react";
import { View, TouchableOpacity, I18nManager } from 'react-native'
import I18n from "@locale"
import { styles } from '../../styles'
import { SearchInput, Icon, SText } from '@components'
import { searchAction } from '../../store/Actions'
import {useDispatch, useSelector} from "react-redux";
import {COLORS, width} from "../../common";

type Props = {
    headerStyles: object;
    screen: string;
    navigation: object;
    title: string
}

export const  Header: React.FC<Props> = ({ headerStyles, screen, navigation, title }) => {
    const [search, setSearch] : any   = useState("");
    const dispatch                    = useDispatch();
    const [loading, setLoading]       = useState(false);
    const { theme }                   = useSelector((state) => state.general);
    const backgroundColor             = { backgroundColor: theme === 'dark' ? COLORS.mainDark : COLORS.white }

    const onSearch = (e: number | string) => {
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
                        onChangeText={(e : any) => onSearch(e)}
                        IconName={"magnify"}
                        placeholder={I18n.t("common.searchall")}
                        containerStyle={styles.searchInput}
                    /> :
                    <View style={{ flexDirection: 'row' , width, alignItems: 'center' }}>
                        {
                            screen === 'ArticleDetails' ?
                                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: COLORS.main, alignSelf: 'flex-end', margin: 20, justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 2 }}>
                                    <Icon type={'Entypo'} name={I18nManager.isRTL ?  'chevron-right' : 'chevron-left'} />
                                </TouchableOpacity> : null
                        }

                        <SText title={title} style={{ textAlign: 'center', fontSize: 18, marginHorizontal: 20 }} />
                    </View>
            }

        </View>
    )
}