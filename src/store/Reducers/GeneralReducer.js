import { I18nManager } from "react-native";
import {
  CHANGE_LANG,
  CHANGE_MODAL_TOASTER,
  NETWORK_CHANGED,
  CHANGE_THEME,

} from "../Types";
import i18n from "@locale";


const INITIAL_STATE = {
  lang: null,
  colorScheme: null,
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
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
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
