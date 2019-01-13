import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions
} from 'react-native';

import { connect } from 'react-redux';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import get from 'lodash.get';

import Blur from '../blur/BlurComponent';
import ProductHero from './ProductHero';
import ProductDetails from './ProductDetails';
import ProductHeader from './ProductHeader';
import AddToCartButton from '../addToCartButton/AddToCartButton';
import SizesButton from '../productSizesButton/SizesButton';

const { height, width } = Dimensions.get('window');

class ProductView extends Component {
  state = {
    scrollY: new Animated.Value(0)
  };
  //

  render() {
    //
    const { isNoSize } = this.props.isNoSize;

    const headerBackground = this.state.scrollY.interpolate({
      inputRange: [hp('45%'), hp('50%'), hp('55%')],
      outputRange: [0, 0.8, 1],
      extrapolate: 'clamp'
    });

    const footerTranslate = this.state.scrollY.interpolate({
      inputRange: [hp('12%'), hp('17%')],
      outputRange: [100, 0],
      extrapolate: 'clamp'
    });

    return (
      <View>
        <ScrollView
          stickyHeaderIndices={[0, 1]}
          scrollEventThrottle={20}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >
          <Animated.View
            style={[styles.hiddenContainer, { opacity: headerBackground }]}
          >
            <Blur />
          </Animated.View>

          <View style={styles.absoluteContainer}>
            <ProductHeader style={[styles.headerContainer]} />
          </View>

          <ProductHero />
          <ProductDetails />
        </ScrollView>

        <Animated.View
          style={[
            styles.footerContainer,
            { transform: [{ translateY: footerTranslate }] }
          ]}
        >
          {isNoSize ? null : <SizesButton style={styles.addToCartButton} />}
          <AddToCartButton style={styles.addToCartButton} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  absoluteContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: wp('100%'),
    zIndex: 5
  },
  hiddenContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: wp('100%'),
    backgroundColor: 'transparent',
    height: hp('14%'),
    zIndex: 2
  },
  footerContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: wp('100%'),
    zIndex: 5
  },
  addToCartButton: {
    // width: wp('50%'),
    flex: 1,
    paddingBottom: height < 737 ? hp('1.5%') : hp('3.5%')
  }
});

const mapStateToProps = state => {
  return {
    isNoSize: state.apiReducer.apiResult
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductView);
