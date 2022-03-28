import { Dimensions, Platform, Share } from "react-native";
import { Images } from "./Images";
import { Feather, Fontisto } from "@expo/vector-icons";
import ConstantsExpo from "expo-constants";
import i18n from "@locale";

export const Constants = {
  baseURL: "https://ekraa.4hoste.com/api/v1/",
  paymentUrl: "https://ekraa.4hoste.com/",
  phoneCode: "+966",
};

export const { width, height } = Dimensions.get("window");

export const IS_IPHONE_X =
  (height === 812 || height === 896) && Platform.OS === "ios";

export const IS_IOS = Platform.OS === "ios";

export const barHeight = ConstantsExpo.statusBarHeight;

export const fonts = {
  regular: "Bahij_TheSansArabic-SemiBold",
  Plain: "Bahij_TheSansArabic-Plain",
  bold: "Bahij_TheSansArabic-SemiBold",
};

export const imagesCache = [
  Images.icon,
  Images.default,
  Images.Logo,
  Images.success,
  Images.Hawk,
  // Your Cache Images Here
];

export const fontCache = {
  [fonts.regular]: require("../../assets/fonts/Bahij_TheSansArabic-SemiBold.ttf"),
  [fonts.Plain]: require("../../assets/fonts/Bahij_TheSansArabic-Plain.ttf"),
  [fonts.bold]: require("../../assets/fonts/Bahij_TheSansArabic-Bold.ttf"),

  ...Feather.font,
  ...Fontisto.font,
};

export const map = {
  // apiKey: "AIzaSyAC-Lk_iSWReCSfPVmCmrAGiKNMtkcJUH8",
  apiKey: "AIzaSyCJTSwkdcdRpIXp2yG7DfSRKFWxKhQdYhQ",
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

export const shareFn = (i18n, data) => {
  const storeLink =
    Platform.OS == "ios" ? "YourAppleStoreLinkHere" : "YourPlayStoreLinkHere";

  Share.share(
    {
      message:
        data?.message ||
        `${i18n.t("common.appName")} \n ${data?.url || storeLink}`,
      title: data?.title || i18n.t("common:shareApp"),
      url: data?.url || storeLink,
    },
    {
      subject: data?.subject || "Default Message Here About App Here",
      dialogTitle: data?.dialogTitle || "App Name Here",
    }
  );
};

export const gender = [
  {
    id: "male",
    name: i18n.t("auth.male"),
  },
  {
    id: "female",
    name: i18n.t("auth.female"),
  },
];
