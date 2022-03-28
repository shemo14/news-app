import { getArticles, articlesSearch } from "../../services";
import { GET_ARTICLES } from "../Types";

export const getArticlesAction = (setLoading) => {
    return async (dispatch) => {
        try {
            const { status, articles } = await getArticles();

            if (status === "ok")
                dispatch({ type: GET_ARTICLES, payload: articles,  page: 1 });

            setLoading && setLoading(false);
        } catch (error) {
            setLoading && setLoading(false);
            console.log("-- error in getArticlesAction --", error);
        }
    };
};

export const getMoreArticlesAction = (setLoading) => {
    return async (dispatch, getState) => {
        let { page, articles, articlesLoading } = getState().articles;


        if (page !== 'FINISHED' && !articlesLoading){
            let nexPage = page+1
            setLoading && setLoading(true);
            try {
                const data = await getArticles(nexPage);

                if (data.articles.length > 0 && nexPage !== 'FINISHED' ){
                    dispatch({ type: GET_ARTICLES, payload: [...articles, ...data.articles], page: nexPage });
                }else
                    dispatch({ type: GET_ARTICLES, payload: articles, page: 'FINISHED' });

                setLoading && setLoading(false);
            } catch (error) {
                setLoading && setLoading(false);
                console.log("-- error in getMoreArticlesAction --", error);
            }
        }
    };
};

export const searchAction = (setLoading, q) => {
    return async (dispatch) => {
        try {
            const { status, articles } = await articlesSearch(q);

            if (status === "ok")
                dispatch({ type: GET_ARTICLES, payload: articles, });

            setLoading && setLoading(false);
        } catch (error) {
            setLoading && setLoading(false);
            console.log("-- error in searchAction --", error);
        }
    };
};
