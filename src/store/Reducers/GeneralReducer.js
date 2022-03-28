import { I18nManager } from "react-native";
import {
  CHANGE_LANG,
  GET_APP_INFO,
  CHANGE_MODAL_TOASTER,
  NETWORK_CHANGED,
} from "../Types";
import i18n from "@locale";

const INITIAL_STATE = {
  lang: null,
  appInfo: {
    currency: i18n.t("common.riyal") || I18nManager.isRTL ? "ر.س" : "RS",
    added_value: 0,
  },
  modalToaster: false,
  network: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return { ...state, lang: action.payload };
    case GET_APP_INFO:
      return { ...state, appInfo: { ...state.appInfo, ...action.payload } };
    case CHANGE_MODAL_TOASTER:
      return {
        ...state,
        modalToaster: action.payload,
      };
    case NETWORK_CHANGED:
      return {
        ...state,
        network: action.payload,
      };

    default:
      return state;
  }
};
