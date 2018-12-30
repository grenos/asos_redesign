import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductsView from '../../components/productsView/ProductsView';

export default class Home extends Component {
  //

  render() {
    return (
      <View>
        <ProductsView />
      </View>
    );
  }
}
