import React from 'react';
import { withNavigation } from 'react-navigation';

import BackButton from '../backButton/BackButton';
import CategoriesButton from '../categoriesButtom/CategoriesButton';

const ButtonSwitcher = props => {
  //
  let buttons = null;
  const currentScreen = props.navigation.state.routeName;

  if (currentScreen === 'SearchProductModal') {
    console.log(props.navigation.state);
    buttons = <CategoriesButton />;
  } else {
    console.log(props.navigation.state);

    buttons = <BackButton />;
  }

  return <>{buttons}</>;
};

export default withNavigation(ButtonSwitcher);
