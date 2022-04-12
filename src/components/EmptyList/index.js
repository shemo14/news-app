import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { COLORS, width, height, moderateScale, verticalScale } from "@common";
import { SText } from "../SText";
import i18n from "@locale";
import { Icon } from "../Icon";

export const EmptyList = ({
  icon,
  image,
  iconType,
  message,
  styleC,
}) => {
  return (
    <View style={[styles.container, styleC]}>
      {image ? (
        <Image source={image} style={styles.img} />
      ) : (
        <Icon
          // name={icon || FeatherIcons.alert}
          name={icon || "slash"}
          type={iconType || "Feather" || "Fontisto"}
          size={width * 0.25}
          color={COLORS.main}
        />
      )}
      <SText title={message || i18n.t("common.noResult")} style={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // height: height / 1.35,
    height: height / 1.8,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: moderateScale(18),
    color: COLORS.blackLight,
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    marginTop: moderateScale(28),
  },
  img: {
    width: "50%",
    height: width * 0.5,
    resizeMode: "contain",
  },
  btnStyle: {
    marginTop: verticalScale(32),
    width: width * 0.7,
  },
});
