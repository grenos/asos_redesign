import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Cart from '../../components/cart/Cart';
import CartBackButon from '../../components/cart/GoBack';
import SearchButton from '../../components/searchButton/SearchButton';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';

class CartScreen extends Component {
  static navigationOptions = {
    headerLeft: <CartBackButon />,
    headerRight: <SearchButton />
  };
  render() {
    if (this.props.cart < 1) {
      return (
        <View style={styles.container}>
          <Text>This cart is empty! Go do some shopping!</Text>
        </View>
      );
    } else {
      return <Cart />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {
    cart: state.apiReducer.cart
  };
};

// const mapDispatchToProps = dispacth => {
//   return {
//     addItemToCart: (id, image, name, size, price) =>
//       dispacth(addToCart(id, image, name, size, price))
//   };
// };

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withNavigation
)(CartScreen);
