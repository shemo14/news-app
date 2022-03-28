import React from "react";
import { Text, StyleSheet, I18nManager } from "react-native";
import { fonts, COLORS } from "@common";
import { moderateScale } from "../../common/Scalling";

export const SText = ({ title, style, ...props }) => (
  <Text style={[styles.text, style]} {...props}>
    {title}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(14),
    color: COLORS.black,
    fontFamily: fonts.regular,
    textAlign: I18nManager.isRTL ? "left" : "left",
  },
});
