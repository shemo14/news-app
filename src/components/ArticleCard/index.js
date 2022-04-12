import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { SText } from "@components";
import { Images, COLORS, CommonStyle, fonts, moderateScale, scale, verticalScale } from "@common";
import {useSelector} from "react-redux";

export const ArticleCard = ({ dep, navigation }) => {
    const { theme } = useSelector((state) => state.general);
    const backgroundColor    = { backgroundColor: theme === 'dark' ? COLORS.mainDark : COLORS.white }
    const [loadingImage, setloadingImage] = useState(false);
    const onLoadImg = (e) => {
        if (e !== undefined) {
            setloadingImage(true);
        }
    };

    return (
        <View style={[styles.Card, backgroundColor]}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('ArticleDetails', { details: dep }) }
            >
                <Image
                    onLoadStart={(e) => setloadingImage(true)}
                    onLoad={onLoadImg}
                    source={loadingImage ? { uri: dep?.urlToImage } : Images.default}
                    style={styles.Image}
                    resizeMode="cover"
                />

                <View style={[styles.Content, backgroundColor]}>
                    <View style={styles.Centerd}>
                        <View style={styles.Wrabes}>
                            <SText title={dep?.title} style={{ marginTop: scale(5) }} />
                            <View style={styles.backgroundColors}>
                                <SText
                                    title={dep?.source.name}
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
                                    title={dep?.publishedAt}
                                    style={{
                                        padding: 3,
                                        color: COLORS.white,
                                        fontFamily: fonts.Plain,
                                        fontSize: moderateScale(12),
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

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
