import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import SearchContainer from '../../components/searchBar/SearchContainer';
import ProductsView from '../../components/productsView/ProductsView';
import { iOSUIKit } from 'react-native-typography';

export default class Home extends Component {
  //
  render() {
    return (
      <View>
        <SearchContainer />
        <Text style={[iOSUIKit.largeTitleEmphasized]}>CATALOGUE</Text>
        <ProductsView />
      </View>
    );
  }
}
