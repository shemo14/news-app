import React, { Fragment, useEffect, useState, useCallback } from "react";
import { View, ActivityIndicator } from 'react-native'
import I18n from "@locale"
import { Container, Header, List, EmptyList, ArticleCard } from '@components'
import { useDispatch, useSelector } from "react-redux";
import { getArticlesAction, getMoreArticlesAction } from '../../store/Actions'


export const  Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [moreLoading, setMoreLoading] = useState(false);
    const {articles} =  useSelector((state) => state.articles);

    useEffect(() => {
        dispatch(getArticlesAction(setLoading));
    }, [])

    const onRefresh = useCallback(() => {
        dispatch(getArticlesAction(setLoading));
    }, []);

    function getMore(){
        dispatch(getMoreArticlesAction(setMoreLoading))
    }


    return (
        <View style={{ flex: 1 }}>
            <Header />

            <Container header={true} loading={loading}>
                <List
                    data={articles}
                    onEndReached={getMore}
                    onRefresh={onRefresh}
                    renderItem={({ item }) => (
                        <ArticleCard dep={item} />
                    )}
                    ListEmptyComponent={<EmptyList message={I18n.t("NoProviders")} />}
                    ListFooterComponent={() => (
                        moreLoading ?
                            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                                <ActivityIndicator size={'large'} />
                            </View> : null
                    )}
                />
            </Container>
        </View>
    )
}