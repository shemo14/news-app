import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./Reducers";
import Reactotron from "../../ReactotronConfig";

const persistsConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "general"],
};

const persistedReducer = persistReducer(persistsConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(thunk), Reactotron.createEnhancer())
);
export const persistedStore = persistStore(store);
