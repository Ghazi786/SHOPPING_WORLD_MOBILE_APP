/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configuration from './src/store/ConfigureStore';
const store = configuration();
import { name as appName } from './app.json';
const myApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => myApp);
