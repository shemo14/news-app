import React from "react";
import { StyleSheet, View, TextInput, I18nManager } from "react-native";
import { COLORS, fonts, IS_IOS } from "@common";
import { SText } from "../SText";
import { Icon } from "../Icon";
import { useState } from "react";
import { moderateScale, scale, verticalScale } from "../../common/Scalling";

export const InputWithHeader = ({
  header,
  style,
  secureTextEntry,
  icon,
  iconColor,
  iconType,
  IconName,
  value,
  ...props
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  return (
    <View style={[styles.container, style]}>
      <View>
        <Icon
          type={"Material-community"}
          name={IconName}
          iconStyle={styles.startIcon}
          size={moderateScale(25)}
          color={COLORS.secondary}
        />
        <View style={{ marginStart: scale(22), bottom: verticalScale(10) }}>
          <SText style={styles.header} title={header} />
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              selectionColor={COLORS.secondaryLight}
              placeholderTextColor={COLORS.gray}
              secureTextEntry={isSecure}
              multiline={secureTextEntry ? false : IS_IOS ? false : true}
              numberOfLines={1}
              value={value}
              {...props}
            />
            {secureTextEntry && (
              <Icon
                name={isSecure ? "eye" : "eye-off"}
                color={isSecure ? COLORS.gray : COLORS.main}
                size={moderateScale(22)}
                underlayColor="transparent"
                onPress={() => setIsSecure(!isSecure)}
                iconStyle={{ bottom: verticalScale(10) }}
              />
            )}
            {icon && (
              <Icon
                name={icon}
                color={iconColor || COLORS.gray}
                type={iconType}
                size={moderateScale(22)}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: scale(10),
    overflow: "hidden",
    paddingHorizontal: scale(15),
    borderWidth: 0.7,
    borderColor: COLORS.secondaryLight,
    marginTop: verticalScale(12),
  },
  startIcon: {
    alignSelf: "flex-start",
    top: verticalScale(35),
    marginStart: scale(-5),
  },
  header: {
    fontSize: moderateScale(15),
    color: COLORS.grayDark,
    // marginStart: 10,
    // marginTop: moderateScale(10),
  },
  input: {
    color: COLORS.black,
    fontFamily: fonts.regular,
    flex: 1,
    // // paddingHorizontal: 10,
    // ...Platform.select({
    //   android: {
    //     textAlign: I18nManager.isRTL ? "right" : "left",
    //   },
    //   ios: {
    //     writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
    //   },
    // }),
    textAlign: I18nManager.isRTL ? "right" : "left",

    fontWeight: "normal",
    fontSize: moderateScale(14),
    paddingEnd: moderateScale(13),
    paddingVertical: IS_IOS ? verticalScale(5) : 0,
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
