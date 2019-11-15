/**
 * @format
 */

import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import React from 'react';
import configureStore from './src/store/configureStore'
const store=configureStore();
const myApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => myApp);
