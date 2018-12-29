import React, { Component } from 'react';
import { View } from 'react-native';
import SelectGender from '../../components/selectGender/SelectGender';
import BannerSales from '../../components/bannerSliders/sales';
import BrandSelector from '../../components/brandSelect/BrandSelector';

class GenderView extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BannerSales />
        <SelectGender />
        <BrandSelector />
      </View>
    );
  }
}

export default GenderView;
