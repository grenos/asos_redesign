import React, { Component } from 'react';
import { View } from 'react-native';
//!redux
import { connect } from 'react-redux';
import { compose } from 'redux';

import { DrawerItems, SafeAreaView, withNavigation } from 'react-navigation';
import images from '../../assets/img/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { iOSUIKit } from 'react-native-typography';

//! Components
import GenderSelector from '../../components/brandContent/GenderSelector';
import BrandList from '../../components/brandContent/BrandList';
import ButtonSet from '../../components/buttonSet/ButtonSet';

class Brands extends Component {
  static navigationOptions = {
    headerRight: <ButtonSet />
  };
  render() {
    return (
      <View style={{ paddingTop: hp('11%') }}>
        <GenderSelector />
        <BrandList />
      </View>
    );
  }
}

export default Brands;
