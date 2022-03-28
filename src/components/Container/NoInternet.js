import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { COLORS, width, fonts, moderateScale, verticalScale } from "../../common";
import { SText } from "../SText";
import I18n from "@locale";
import LottieView from "lottie-react-native";
import { Lotties } from "../../common";

const NoInternet = ({}) => {
  return (
      <View style={[styles.container]}>
        {/* <Image source={Images.noWifi} style={styles.img} /> */}
        <View
            style={{ height: moderateScale(300), marginTop: moderateScale(-100) }}
        >
          <LottieView
              source={Lotties.noInternet}
              autoPlay
              loop
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
              }}
          />
        </View>

        <SText title={I18n.t("common.noInternet")} style={styles.text} />
      </View>
  );
};

export { NoInternet };

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // height: height / 1.35,
    flex: 1,
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: moderateScale(17),
    color: COLORS.blackLight,
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    marginTop: moderateScale(27),
    fontFamily: fonts.bold,
  },
  img: {
    width: "50%",
    height: width * 0.5,
    resizeMode: "contain",
  },
});
