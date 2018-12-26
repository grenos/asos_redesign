import React, { Component } from 'react';
import SelectGender from '../../components/selectGender/SelectGender';
import BannerSales from '../../components/bannerSliders/sales';

class GenderView extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <>
        <BannerSales />
        <SelectGender />
      </>
    );
  }
}

export default GenderView;
