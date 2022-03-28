import { combineReducers } from "redux";
import articles from "./ArticleReducer.js";
import general from "./GeneralReducer.js";

const appReducer = combineReducers({
    articles,
    general
});

export default rootReducer = (state, action) => {
    return appReducer(state, action);
};
