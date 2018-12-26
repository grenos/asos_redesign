import React, { Component } from 'react';
import SelectGender from '../../components/selectGender/SelectGender';
import BannerSales from '../../components/bannerSliders/sales';
import BrandSelector from '../../components/brandSelect/BrandSelector';

class GenderView extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <>
        <BannerSales />
        <SelectGender />
        <BrandSelector />
      </>
    );
  }
}

export default GenderView;
