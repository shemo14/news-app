import I18n from "i18n-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ar from "./ar";
import en from "./en";
import { I18nManager } from "react-native";

I18n.fallbacks = true;

I18n.translations = {
  en,
  ar,
};

I18n.locale = I18nManager.isRTL ? "ar" : "en";

AsyncStorage.getItem("lang").then((lang) => {
  I18n.locale = lang;
});

export default I18n;
