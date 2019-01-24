/** @format */
import React from 'react';
import { AppRegistry } from 'react-native';
import AppContainer from './src/navigation/router';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import * as NavigationService from './src/navigation/NavigationService';
import configureStore from './src/store/store';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build();
const store = configureStore();

class appWrapper extends React.Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }
  render() {
    //

    return (
      <Provider store={store}>
        <AppContainer
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => appWrapper);
