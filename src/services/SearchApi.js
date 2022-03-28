import {request} from "./ApiCentral";

export const articlesSearch = (q) => {
    return request(
        {
            url: "top-headlines?q=" + q,
            method: "GET",
        },
        true
    );
};