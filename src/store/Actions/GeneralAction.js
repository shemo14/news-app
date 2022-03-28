import { I18nManager } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "@locale";
import * as Updates from "expo-updates";
import {
  CHANGE_LANG,
  CHANGE_MODAL_TOASTER,
  NETWORK_CHANGED,
  CHANGE_THEME
} from "../Types";
import { store } from "..";

export const chooseLangAction = (lang) => {
  if (lang === "en") {
    I18nManager.forceRTL(false);
  } else {
    I18nManager.forceRTL(true);
  }

  i18n.locale = lang;
  setLang(lang);

  return {
    type: CHANGE_LANG,
    payload: lang,
  };
};

export const chooseThemeAction = (theme) => {
  setTheme(theme);

  return {
    type: CHANGE_THEME,
    payload: theme,
  };
};

const setLang = async (lang) => {
  let currentLang = store.getState().general.lang;
  if (currentLang !== lang) {
    await AsyncStorage.setItem("lang", lang).then(() => {
      Updates.reloadAsync();
    });
  }
};

const setTheme = async (theme) => {
  let currentTheme = store.getState().general.theme;
  if (currentTheme !== theme) {
    await AsyncStorage.setItem("theme", theme);
  }
};


export const modalToasterAction = (value) => {
  return async (dispatch) => {
    dispatch({
      type: CHANGE_MODAL_TOASTER,
      payload: value,
    });
  };
};

export const networkChangedAction = (value) => {
  return async (dispatch) => {
    dispatch({
      type: NETWORK_CHANGED,
      payload: value,
    });
  };
};
