import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RootNavigator } from './src/navigation'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore, store } from "@store";
import { fontCache, imagesCache } from "@common";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";


export default function App() {
    const [isReady, setIsReady] = useState(false);
    const { theme } = store.getState().general;

    const loadCacheResources = async () => {
        try {
            await Font.loadAsync(fontCache);
            await Asset.loadAsync(imagesCache);
        } catch (e) {
            console.warn(e);
        } finally {
            setIsReady(true);
        }
    };



    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadCacheResources}
                onFinish={() => setIsReady(true)}
                onError={console.warn}
            />
        );
    } else {
        return (
            <Provider store={store}>
                <StatusBar style={theme == 'light' ? 'dark' : "light"} />
                <PersistGate persistor={persistedStore}>
                    <RootNavigator/>
                </PersistGate>
            </Provider>
        );
    }
}

