import React from "react";
import { Text, StyleSheet, I18nManager } from "react-native";
import { fonts, COLORS } from "@common";
import { moderateScale } from "../../common/Scalling";
import {useSelector} from "react-redux";

export const SText = ({ title, style, ...props }) =>{
  const { theme } = useSelector((state) => state.general);
  const color    = { color: theme === 'dark' ? COLORS.white : COLORS.mainDark }

  return(
      <Text style={[styles.text, color, style,]} {...props}>
        {title}
      </Text>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(14),
    color: COLORS.black,
    fontFamily: fonts.regular,
    textAlign: I18nManager.isRTL ? "left" : "left",
  },
});
