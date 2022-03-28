import axios from "axios";
import { I18nManager } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Constants } from "@common";
import { showToaster } from "../../components/Toaster";
import reactotron from "reactotron-react-native";
import { useDispatch } from "react-redux";
// import { signOutAction } from "../../store/Actions/AuthAction";
import i18n from "@locale";

const request = async (options, hideToaster = false, hideToken = false) => {
  // Two Variables path to every request
  let lang = (await AsyncStorage.getItem("lang")) || null,
    token = (await AsyncStorage.getItem("token")) || null;

  // Create our Request --> Axios ..
  // With server-url - token and language
  const client = axios.create({
    baseURL: Constants.baseURL, // project server-url
    params: { lang: lang ? lang : I18nManager.isRTL ? "ar" : "en" },
    headers: {
      Authorization: !hideToken ? (token ? "Bearer " + token : token) : null,
    },
  });

  // const dispatch = useDispatch();

  // Function for Success request
  const onSuccess = function (response) {
    // The Result of the Request
    // #TODO Can Handle Toaster for Every Request
    if (response.data?.code == 402) {
      // dispatch(signOutAction());
      showToaster({
        message: i18n.t("youAreDeleted"),
        type: "danger",
      });
    } else {
      !hideToaster &&
        showToaster({
          message: response.data.message,
          type: response.data.success ? "success" : "danger",
        });
    }

    return response.data;
  };

  // Function for Error request
  const onError = function (error) {
    // method returns a Promise object that is rejected with a given reason.

    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;

// -- HOW TO USE THIS --

// use request function and path request info like this ..

// import request from './apiCentral'

// export const postAPI = (body) => {
//   return request({
//     url: "request-url-here",
//     method: "POST",
//     data: body,
//   });
// };

// export const getAPI = () => {
//   return request({
//     url: "request-url-here",
//     method: "GET",
//   });
// };

// export export const postAPIWithFormData = (body) => {
//   return request({
//     url: "request-url-here",
//     method: "POST",
//     data: body,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

// use the function in any screen you want like this

// useEffect(() => {
//   (async () => await getAPI())();
// }, []);

// Example
// with Redux Action

// export const toggleFavourite = (item) => {
//     return async (dispatch, getState) => {
//         const { favourites } = getState().favourites
//         const res = await toggleFavourite(item?.id);
//         let index = favourites.findIndex(e.id == item?.id)
//         if (index > -1) {
//             // Found
//             favourites.splice(index, 1)
//             // or
//             // favourites.filter(fav => fav.id != item?.id)
//         } else {
//             // Not Found
//             favourites.push(item)
//         }
//         dispatch({
//             payload: favourites,
//             type: 'get_favourite'
//         })
//     }
// }
