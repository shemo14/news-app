import React from "react";
import {
  View,
  TextInput,
  Platform,
  I18nManager,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../common/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "../../common/Scalling";
import { IS_IOS, fonts } from "@common";

export const SearchInput = ({
  containerStyle,
  IconName,
  IconStyle,
  IconEndName,
  inputStyle,
  onPress,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialCommunityIcons
        style={[
          {
            color: COLORS.secondary,
            fontSize: moderateScale(22),
            marginStart: moderateScale(10),
          },
          IconStyle,
        ]}
        name={IconName}
      />
      <TextInput
        style={[styles.input, inputStyle]}
        selectionColor={COLORS.secondaryLight}
        placeholderTextColor={COLORS.blackLight}
        numberOfLines={1}
        {...props}
      />

      {IconEndName && (
        <TouchableOpacity
          style={{ alignSelf: "flex-end", margin: scale(10) }}
          onPress={onPress}
        >
          <MaterialCommunityIcons
            style={[
              { color: COLORS.secondary, fontSize: moderateScale(22) },
              IconStyle,
            ]}
            name={IconEndName}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.secondaryLight,
    flexDirection: "row",
    borderRadius: scale(5),
    marginTop: verticalScale(10),
    alignItems: "center",
  },
  input: {
    color: COLORS.black,
    fontFamily: fonts.Plain,
    flex: 1,
    textAlign: I18nManager.isRTL ? "right" : "left",
    fontSize: moderateScale(14),
    paddingEnd: moderateScale(13),
    paddingVertical: IS_IOS ? verticalScale(5) : 0,
    paddingStart: scale(10),
  },
});
