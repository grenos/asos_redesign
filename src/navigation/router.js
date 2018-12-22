import React from 'react';
import { iOSUIKit } from 'react-native-typography';

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  StackActions,
  NavigationActions
} from 'react-navigation';

// screens
import App from '../screens/app/App';
import Home from '../screens/home/home';
import SearchProductModal from '../screens/modals/SearchProductModal';

//components
import BackButton from '../components/backButton/BackButton';
import SearchButton from '../components/searchButton/SearchButton';

const AppStack = createStackNavigator(
  {
    App: {
      screen: App
    },
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: 'App',
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomColor: '#fff'
      },
      headerLeft: <BackButton />,
      headerRight: <SearchButton />,
      title: 'ASOS',
      headerTitleStyle: {
        ...iOSUIKit.largeTitleEmphasized
      }
    }
  }
);

const CompleteStack = createStackNavigator(
  {
    AppStack: {
      screen: AppStack
    },
    SearchProductModal: {
      screen: SearchProductModal
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardOverlayEnabled: true
  }
);

export default (AppContainer = createAppContainer(CompleteStack));
