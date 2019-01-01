import React from 'react';
import { iOSUIKit } from 'react-native-typography';

import { createStackNavigator, createAppContainer } from 'react-navigation';

// screens
// import App from '../screens/app/App';
import GenderView from '../screens/genderView/GenderView';
import SelectCategory from '../screens/selectCategory/SelectCategory';
import Products from '../screens/products/Products';
import Product from '../screens/product/Product';
import SearchProductModal from '../screens/modals/SearchProductModal';

//components
import BackButton from '../components/backButton/BackButton';
import SearchButton from '../components/searchButton/SearchButton';
import Blur from '../components/blur/BlurComponent';

const AppStack = createStackNavigator(
  {
    GenderView: {
      screen: GenderView
    },
    SelectCategory: {
      screen: SelectCategory
    },
    Products: {
      screen: Products
    },
    Product: {
      screen: Product
    }
  },
  {
    initialRouteName: 'GenderView',
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0
      },
      headerTransparent: true,
      headerBackground: <Blur />,
      headerLeft: <BackButton />,
      headerRight: <SearchButton />,
      title: 'ASOS',
      headerTitleStyle: {
        ...iOSUIKit.largeTitleEmphasized
      },
      headerBackgroundTransitionPreset: 'translate'
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
    cardOverlayEnabled: true,
    transparentCard: true
  }
);

const AppContainer = createAppContainer(CompleteStack);

export default AppContainer;
