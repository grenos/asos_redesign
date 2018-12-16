import React, { Component } from 'react';
import { View } from 'react-native';
import SearchContainer from '../../components/searchBar/SearchContainer';
import ProductsView from '../../components/productsView/ProductsView';

export default class Home extends Component {
  //
  render() {
    return (
      <View>
        <SearchContainer />

        <ProductsView />
      </View>
    );
  }
}
