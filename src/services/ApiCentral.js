import axios from "axios";
import { I18nManager } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Constants } from "@common";
import { showToaster } from "../components/Toaster";

export const request = async (options, hideToaster = false, toasterType) => {
  let token = await AsyncStorage.getItem("token"),
      language = await AsyncStorage.getItem("lang");

  const client = axios.create({
    baseURL: Constants.baseURL,
    params: {
      apiKey: '75a138926c4141088ab2ef0690108544',
      country: I18nManager.isRTL ? 'eg' : 'us',
      language
    },
    headers: {
      Authorization: token ? `Bearer ${token}` : token,
    },
  });

  const onSuccess = function (response) {
    if (!hideToaster) {
      switch (response?.data?.key) {
        case "failed":
          showToaster({
            message: response?.data?.msg,
            type: toasterType || "danger",
          });
          break;
        case "success":
          response?.data?.msg
              ? showToaster({
                message: response?.data?.msg,
                type: toasterType || "success",
              })
              : null;
          break;
        default:
          showToaster({
            message: response?.data?.msg,
            type: toasterType || "danger",
          });
          break;
      }
    }
    return response?.data;
  };

  const onError = function (error) {
    return Promise.reject(error?.response || error?.message);
  };

  return client(options).then(onSuccess).catch(onError);
};
