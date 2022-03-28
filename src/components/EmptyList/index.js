import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { COLORS, width, height } from "@common";
import { SText } from "../SText";
import i18n from "@locale";
import { Icon } from "../Icon";
import { Btn } from "../Btn";
import { moderateScale, verticalScale } from "../../common/Scalling";

export const EmptyList = ({
  icon,
  image,
  iconType,
  message,
  styleC,
  action,
  btnName,
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
      {action && (
        <Btn
          onPress={action}
          text={btnName}
          btnStyle={styles.btnStyle}
          // textStyle={styles.openMapText}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // height: height / 1.35,
    height: height / 1.8,
    backgroundColor: COLORS.bgLight,
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
