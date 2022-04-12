import React, { useEffect, useState, useCallback } from "react";
import { View, ActivityIndicator } from 'react-native'
import I18n from "@locale"
import { Container, Header, List, EmptyList, ArticleCard } from '@components'
import { useDispatch, useSelector } from "react-redux";
import { getArticlesAction, getMoreArticlesAction } from '../../store/Actions'


export const  Home = ({ navigation }: any) => {
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

    const getMore = () => {
        dispatch(getMoreArticlesAction(setMoreLoading))
    }

    return (
        <View style={{ flex: 1 }}>
            <Header screen={'Home'} />

            <Container header={true} loading={loading}>
                <List
                    data={articles}
                    onEndReached={getMore}
                    onRefresh={onRefresh}
                    renderItem={({ item } : any) => (
                        <ArticleCard dep={item} navigation={navigation} />
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