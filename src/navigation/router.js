import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  StackActions,
  NavigationActions,
  SafeAreaView
} from 'react-navigation';

import App from '../screens/app/App';
import Home from '../screens/home/home';

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
        fontSize: 26,
        fontWeight: 'bold'
      }
    }
  }
);

export default (AppContainer = createAppContainer(AppStack));
