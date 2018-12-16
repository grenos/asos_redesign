import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchContainer from '../../components/searchBar/SearchContainer';
import ProductsView from '../../components/productsView/ProductsView';
import { iOSUIKit } from 'react-native-typography';
import { wpW, wpH } from '../../helpers/helpers';

export default class Home extends Component {
  //
  render() {
    return (
      <View>
        <SearchContainer />
        <View style={{ zIndex: 3 }}>
          <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
            CATALOGUE
          </Text>
        </View>
        <ProductsView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: wpH(1)
    // left: wpW(4)
  },
  productsContainer: {
    paddingBottom: 100
  }
});
