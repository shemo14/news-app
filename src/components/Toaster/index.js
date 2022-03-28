import React from "react";
import { StyleSheet, View } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { COLORS, fonts, moderateScale, scale } from "@common";
import Constants from "expo-constants";
import { SText } from "../SText";

const ColorTheme = {
  success: "#5cb85c",
  info: "#5bc0de",
  warning: "#f0ad4e",
  danger: "#d9534f",
};

export const Toaster = ({ ...props }) => {
  const customToaster = (values) => {
    const { message, titleStyle, textStyle } = values;
    return (
      <View
        style={{
          backgroundColor:
            message?.type == "danger"
              ? ColorTheme?.danger
              : ColorTheme?.success,
          padding: scale(10),
          paddingTop: Constants.statusBarHeight + scale(10),
        }}
      >
        {message?.message ? (
          <SText style={titleStyle} title={message?.message} />
        ) : null}
        {message?.description && (
          <SText style={textStyle} title={message?.description} />
        )}
      </View>
    );
  };
  return (
    <FlashMessage
      position={"top"}
      titleStyle={styles.titleStyle}
      textStyle={styles.descriptionStyle}
      statusBarHeight={Constants.statusBarHeight}
      {...props}
      MessageComponent={customToaster}
    />
  );
};

export const showToaster = ({ message, description, type }) =>
  showMessage({
    message: message,
    description: description,
    type: type || "danger",
    // type: 'success'
  });

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: fonts.regular,
    alignSelf: "flex-start",
    fontSize: moderateScale(14),
    color: COLORS.white,
  },
  descriptionStyle: {
    fontFamily: fonts.regular,
    alignSelf: "flex-start",
    fontSize: moderateScale(13),
    color: COLORS.white,
  },
});
