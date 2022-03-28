import {request} from "./ApiCentral";

export const getArticles = (page = 1) => {
    return request(
        {
            url: "top-headlines?page=" + page,
            method: "GET",
        },
        true
    );
};