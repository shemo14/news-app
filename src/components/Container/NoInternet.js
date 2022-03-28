import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
import { COLORS, width, height, Images } from "../../common";
import { SText } from "../SText";
import i18n from "@locale";
import { moderateScale, verticalScale } from "../../common/Scalling";
import LottieView from "lottie-react-native";

const NoInternet = ({}) => {
  return (
    <View style={[styles.container]}>
      {/* <Image source={Images.noWifi} style={styles.img} /> */}
      <LottieView
        autoPlay
        loop
        style={{
          width: 400,
          height: 400,
          backgroundColor: COLORS.white,
        }}
        source={require("../../../assets/Images/noInternet.json")}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
      <SText title={i18n.t("common.noInternet")} style={styles.text} />
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
    marginTop: verticalScale(27),
  },
  img: {
    width: "50%",
    height: width * 0.5,
    resizeMode: "contain",
  },
});
