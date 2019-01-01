import React, { Component } from 'react';
import { View } from 'react-native';

import ProductView from '../../components/productView/ProductView';

export default class Product extends Component {
  //
  static navigationOptions = {
    header: null
  };
  //
  render() {
    return (
      <View>
        <ProductView />
      </View>
    );
  }
}
