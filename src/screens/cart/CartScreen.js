import React, { Component } from 'react';

import Cart from '../../components/cart/Cart';
import CartBackButon from '../../components/cart/GoBack';
import SearchButton from '../../components/searchButton/SearchButton';

export default class CartScreen extends Component {
  static navigationOptions = {
    headerLeft: <CartBackButon />,
    headerRight: <SearchButton />
  };
  render() {
    return (
      <>
        <Cart />
      </>
    );
  }
}
