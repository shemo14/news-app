import { I18nManager } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "@locale";
import * as Updates from "expo-updates";
import {
  CHANGE_LANG,
  GET_APP_INFO,
  CHANGE_MODAL_TOASTER,
  NETWORK_CHANGED,
} from "../Types";
import { store } from "..";
import { getAppInfo } from "@apis";

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

const setLang = async (lang) => {
  let currentLang = store.getState().general.lang;
  if (currentLang != lang) {
    await AsyncStorage.setItem("lang", lang).then(() => {
      Updates.reloadAsync();
    });
  }
};

export const getAppInfoAction = (setLoading) => {
  return async (dispatch) => {
    setLoading && setLoading(true);
    const { data } = await getAppInfo();
    setLoading && setLoading(false);

    dispatch({
      type: GET_APP_INFO,
      payload: data
        ? data
        : {
            currency: i18n.t("common:riyal"),
          },
    });
  };
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
