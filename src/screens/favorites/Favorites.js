import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';

import FavoritesView from '../../components/favoritesComponent/FavoritesView';
import CartBackButon from '../../components/cart/GoBack';
import SearchButton from '../../components/searchButton/SearchButton';

class Favorites extends Component {
  static navigationOptions = {
    headerLeft: <CartBackButon />,
    headerRight: <SearchButton />
  };
  render() {
    if (this.props.favorites < 1) {
      return (
        <View style={styles.container}>
          <Text>You haven't added anyhing yet! Go do some shopping!</Text>
        </View>
      );
    } else {
      return <FavoritesView />;
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
    favorites: state.apiReducer.favorites
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
)(Favorites);
