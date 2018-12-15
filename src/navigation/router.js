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
    initialRouteName: 'App'
  }
);

export default (AppContainer = createAppContainer(AppStack));
