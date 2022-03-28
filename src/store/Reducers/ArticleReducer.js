import { GET_ARTICLES } from "../Types";

const INITIAL_STATE = {
    articles: [],
    page: 1,
    articlesLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                page: action.page,
                articles: action.payload
            };

        default:
            return state;
    }
};
