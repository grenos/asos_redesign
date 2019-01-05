import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//!redux
import { connect } from 'react-redux';
import { compose } from 'redux';

//!libraries
import { iOSUIKit } from 'react-native-typography';
import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import get from 'lodash.get';

//!components
import ProductVideo from './ProductVideo';
import ProductSlider from './ProductSlider';

class ProductHero extends Component {
  //

  render() {
    let { isVideo } = this.props;

    let { name } = this.props.apiResult;
    const price = get(this.props.apiResult, 'price.current.text', 'loading');
    const videoExists = get(this.props.apiResult, 'media.catwalk', 'loading');

    return (
      <View>
        {isVideo && videoExists != 0 ? <ProductVideo /> : <ProductSlider />}

        <View style={styles.priceContainer}>
          <Text style={[iOSUIKit.subheadEmphasized, styles.price]}>
            {price}
          </Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={[iOSUIKit.subheadEmphasized, styles.title]}>{name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  priceContainer: {
    position: 'absolute',
    right: wp('7%'),
    bottom: hp('7%')
  },
  price: {
    fontSize: hp('3%'),
    lineHeight: hp('3%')
  },
  titleContainer: {
    padding: '3%',
    bottom: hp('15%'),
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  },
  title: {
    fontSize: hp('3%'),
    lineHeight: hp('4%'),
    color: '#000'
  }
});

const mapStateToProps = state => {
  return {
    isVideo: state.uiReducer.isVideo,
    apiResult: state.apiReducer.apiResult
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withNavigation
)(ProductHero);
