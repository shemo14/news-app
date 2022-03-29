import React, { Fragment, useEffect, useState, useCallback } from "react";
import {View, ActivityIndicator, Image, StyleSheet} from 'react-native'
import I18n from "@locale"
import { Container, Header, List, EmptyList, ArticleCard, SText } from '@components'
import { useDispatch, useSelector } from "react-redux";
import { getArticlesAction, getMoreArticlesAction } from '../../store/Actions'
import { Images, COLORS, CommonStyle, fonts, moderateScale, scale, verticalScale, height } from "@common";

export const  ArticleDetails = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { details } = route.params;

    useEffect(() => {
        dispatch(getArticlesAction(setLoading));
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Header navigation={navigation} headerStyles={{ backgroundColor: 'transparent', position: 'absolute', zIndex: 1, width: '100%' }} screen={'ArticleDetails'} />
            <Container header={true} loading={loading} style={{ zIndex: -1 }}>
                <Image source={{uri: details.urlToImage}} resizeMode={'cover'} style={{ width: '100%', height: moderateScale(height*0.4), marginTop: -50 }} />
                <View style={{ padding: 15 }}>
                    <SText title={details.title} style={{ fontSize: 16, marginVertical: 5 }}/>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.backgroundColors}>
                            <SText
                                title={details.source.name}
                                style={{
                                    padding: 3,
                                    fontFamily: fonts.Plain,
                                    color: COLORS.white,
                                    fontSize: moderateScale(12),
                                }}
                            />
                        </View>
                        <View style={styles.WrabDistance}>
                            <SText
                                title={details.publishedAt}
                                style={{
                                    padding: 3,
                                    color: COLORS.white,
                                    fontFamily: fonts.Plain,
                                    fontSize: moderateScale(12),
                                }}
                            />
                        </View>
                    </View>
                    <SText title={details.description} style={{ marginVertical: 5, lineHeight: 30, marginTop: 20 }}/>
                </View>
            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        marginHorizontal: scale(10),
        borderRadius: scale(15),
        overflow: "hidden",
        ...CommonStyle.shadow,
        marginTop: moderateScale(10),
        marginBottom: scale(5),
    },
    Image: {
        height: moderateScale(180),
    },
    WrabDis: {
        position: "absolute",
        backgroundColor: COLORS.white,
        padding: scale(3),
        paddingHorizontal: scale(5),
        flexDirection: "row",
        alignItems: "center",
        margin: scale(10),
        right: scale(5),
        borderRadius: scale(5),
    },
    WrabDistance: {
        backgroundColor: COLORS.secondary,
        borderRadius: scale(10),
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: scale(5),
        marginStart: scale(5),
        marginTop: scale(5),
    },
    Icon: {
        fontSize: moderateScale(18),
        color: COLORS.main,
        marginEnd: moderateScale(5),
    },

    backgroundColors: {
        backgroundColor: COLORS.main,
        borderRadius: scale(10),
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: moderateScale(5),
        marginStart: scale(10),
        marginTop: scale(5),
    },

    Centerd: {
        flexDirection: "row",
        alignItems: "center",
    },
    Wrabes: {
        flexDirection: "row",
        marginTop: scale(12),
        marginStart: scale(10),
        flexWrap: "wrap",
        paddingBottom: 10
    },
    Content: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    address: {
        color: COLORS.blackLight,
        marginTop: verticalScale(10),
        fontFamily: fonts.Plain,
        marginStart: scale(10),
        marginBottom: scale(5),
        flexWrap: "wrap",
    },
    rateText: {
        marginEnd: moderateScale(5),
        fontSize: moderateScale(13),
    },
});