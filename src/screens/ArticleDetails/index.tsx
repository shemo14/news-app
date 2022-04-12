import React, { useEffect, useState } from "react";
import {View, Image, StyleSheet} from 'react-native'
import { Container, Header, SText } from '@components'
import { useDispatch } from "react-redux";
import { getArticlesAction } from '../../store/Actions'
import { COLORS, CommonStyle, fonts, moderateScale, scale, verticalScale, height } from "@common";

export const  ArticleDetails = ({ navigation, route } : any) => {
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
    WrabDistance: {
        backgroundColor: COLORS.secondary,
        borderRadius: scale(10),
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: scale(5),
        marginStart: scale(5),
        marginTop: scale(5),
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
});