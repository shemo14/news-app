import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, I18nManager } from "react-native";
import { SText } from "../SText";
import I18n from "@locale";
import { COLORS, moderateScale } from "@common";
import { useSelector, useDispatch } from "react-redux";
import { chooseLangAction } from "../../store/Actions";

export const LangSwitchTab = ({
  activeStyle,
  unActiveStyle,
  callBack,
  containerStyle,
}) => {
  const language = useSelector((state) => state.general);
  let defaultLang = I18nManager.isRTL ? "ar" : "en";
  const [selectLang, setSelectLang] = useState(language?.lang || defaultLang);
  let btns = ["ar", "en"];

  let check = (lang) => selectLang == lang;

  const dispatch = useDispatch();

  const handlePress = (value) => {
    if (language?.lang != value) {
      dispatch(chooseLangAction(value));
      callBack && callBack();
    }
    setSelectLang(value);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {btns.map((e, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(e)}
            style={[
              styles.common,
              check(e)
                ? { ...styles.selected, ...activeStyle }
                : { ...styles.unSelected, unActiveStyle },
            ]}
            activeOpacity={0.8}
          >
            <SText
              title={I18n.t(`common.${e}`)}
              style={check(e) ? styles.textSelected : styles.textUnSelected}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(15),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    alignSelf: "center",
    borderRadius: moderateScale(15),
    paddingVertical: moderateScale(12),
  },
  header: {
    fontSize: moderateScale(18),
    marginVertical: moderateScale(22),
    alignSelf: "center",
    color: COLORS.main,
  },
  common: {
    borderRadius: moderateScale(15),
    paddingHorizontal: moderateScale(17),
    paddingVertical: moderateScale(12),

    minWidth: moderateScale(100),
    alignItems: "center",
  },
  selected: {
    backgroundColor: COLORS.main,
  },
  unSelected: {
  //  backgroundColor: COLORS.white,
  },
  textSelected: {
    fontSize: moderateScale(15),
    color: COLORS.white,
  },
  textUnSelected: {
    color: COLORS.grayDark,
  },
});
