import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import SelectGender from '../../components/selectGender/SelectGender';
// import BannerSales from '../../components/bannerSliders/sales';
import BrandSelector from '../../components/brandSelect/BrandSelector';
import BurgerButton from '../../components/burgerButton/BurgerButton';
import ButtonSet from '../../components/buttonSet/ButtonSet';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const { height, width } = Dimensions.get('window');

class GenderView extends Component {
  static navigationOptions = {
    headerLeft: <BurgerButton />,
    headerRight: <ButtonSet />
  };

  render() {
    return (
      <View
        style={{ flex: 1, paddingTop: height <= 737 ? hp('11%') : hp('13%') }}
      >
        {/* <BannerSales /> */}
        <SelectGender />
        <BrandSelector />
      </View>
    );
  }
}

export default GenderView;
