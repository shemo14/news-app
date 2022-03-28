import { Dimensions, Platform, Share } from "react-native";
import { Feather, Fontisto } from "@expo/vector-icons";
import ConstantsExpo from "expo-constants";
import I18n from "@locale";
import { Images } from "./Images";

export const Constants = {
  baseURL: "https://newsapi.org/v2/",
};

export const { width, height } = Dimensions.get("window");

export const IS_IPHONE_X =
  (height === 812 || height === 896) && Platform.OS === "ios";

export const IS_IOS = Platform.OS === "ios";

export const barHeight = ConstantsExpo.statusBarHeight;

export const fonts = {
  regular: "ArbFONTS-Droid-Naskh-Regular",
  bold: "ArbFONTS-Droid-Arabic-Naskh-Bold",
};

export const fontCache = {
  [fonts.regular]: require("../../assets/fonts/ArbFONTS-Droid-Naskh-Regular.ttf"),
  [fonts.bold]: require("../../assets/fonts/ArbFONTS-Droid-Arabic-Naskh-Bold.ttf"),
  ...Feather.font,
  ...Fontisto.font,
};

export const imagesCache = [
  // Your Cache Images Here
  Images.default,
];

export const map = {
  // apiKey: "AIzaSyAC-Lk_iSWReCSfPVmCmrAGiKNMtkcJUH8",
  apiKey: "AIzaSyCJTSwkdcdRpIXp2yG7DfSRKFWxKhQdYhQ",
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

export const shareFn = (I18n, data) => {
  const storeLink =
    Platform.OS == "ios" ? "YourAppleStoreLinkHere" : "YourPlayStoreLinkHere";

  Share.share(
    {
      message:
        data?.message ||
        `${I18n.t("common.appName")} \n ${data?.url || storeLink}`,
      title: data?.title || I18n.t("common:shareApp"),
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
    name: I18n.t("auth.male"),
  },
  {
    id: "female",
    name: I18n.t("auth.female"),
  },
];
