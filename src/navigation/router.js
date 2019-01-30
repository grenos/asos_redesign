import React from 'react';
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
import Brands from '../screens/brands/Brands';
import CartScreen from '../screens/cart/CartScreen';
import SetQtyModal from '../screens/modals/SetQtyModal'

//components
import BackButton from '../components/backButton/BackButton';
import SearchButton from '../components/searchButton/SearchButton';
import Blur from '../components/blur/BlurComponent';
import CustomDrawerContentComponent from '../components/drawerComponent/DrawerMain';

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
    Brands: {
      screen: Brands
    },
    CartScreen: {
      screen: CartScreen
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

const AppDrawer = createDrawerNavigator(
  {
    Home: {
      screen: AppStack
    }
  },
  {
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {}
  }
);

const NoDrawerStack = createStackNavigator(
  {
    Product: {
      screen: Product
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const CardStyleStck = createStackNavigator(
  {
    AppDrawer: {
      screen: AppDrawer
    },
    Product: {
      screen: NoDrawerStack
    }
  },
  {
    mode: 'card',
    headerMode: 'none'
  }
);

const CompleteStack = createStackNavigator(
  {
    MainScreens: {
      screen: CardStyleStck
    },
    SearchProductModal: {
      screen: SearchProductModal
    },
    FindSizeModal: {
      screen: FindSizeModal
    },
    SetQtyModal: {
      screen: SetQtyModal
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardOverlayEnabled: true,
    transparentCard: true
  },
  { headerMode: 'none' }
);

const AppContainer = createAppContainer(CompleteStack);

export default AppContainer;
