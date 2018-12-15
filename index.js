/** @format */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/screens/app/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './src/store/store';

const store = configureStore();

const appWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => appWrapper);
