/** @format */
import React from 'react';
import { AppRegistry } from 'react-native';
import AppContainer from './src/navigation/router';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './src/store/store';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build();
const store = configureStore();

const appWrapper = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => appWrapper);
