import React from 'react';
import { View } from 'react-native';
import { iOSUIKit } from 'react-native-typography';

import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';

// screens
// import App from '../screens/app/App';
import GenderView from '../screens/genderView/GenderView';
import SelectCategory from '../screens/selectCategory/SelectCategory';
import Products from '../screens/products/Products';
import Product from '../screens/product/Product';
import SearchProductModal from '../screens/modals/SearchProductModal';
import FindSizeModal from '../screens/modals/FindSizeModal';

//components
import BackButton from '../components/backButton/BackButton';
import SearchButton from '../components/searchButton/SearchButton';
import Blur from '../components/blur/BlurComponent';
import BurgerButton from '../components/burgerButton/BurgerButton';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

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
      // navigationOptions: ({ navigation }) => ({
      //   drawerLockMode: 'locked-closed'
      // })
    }
  },
  {
    initialRouteName: 'GenderView',
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0
      },
      gesturesEnabled: false,
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
    },
    FindSizeModal: {
      screen: FindSizeModal
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardOverlayEnabled: true,
    transparentCard: true
  }
);

const AppDrawer = createDrawerNavigator(
  {
    Home: {
      screen: CompleteStack
    }
  },
  {
    contentOptions: {}
  }
);

const AppContainer = createAppContainer(AppDrawer);

export default AppContainer;
