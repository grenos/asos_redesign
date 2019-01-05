import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Animated } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Blur from '../blur/BlurComponent';
import ProductHero from './ProductHero';
import ProductDetails from './ProductDetails';
import ProductHeader from './ProductHeader';

class ProductView extends Component {
  state = {
    scrollY: new Animated.Value(0)
  };
  //

  render() {
    //

    const headerBackground = this.state.scrollY.interpolate({
      inputRange: [hp('45%'), hp('50%'), hp('55%')],
      outputRange: [0, 0.8, 1],
      extrapolate: 'clamp'
    });

    return (
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

        <Animated.View style={styles.absoluteContainer}>
          <ProductHeader style={[styles.headerContainer]} />
        </Animated.View>
        <ProductHero />
        <ProductDetails />
      </ScrollView>
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
  }
});

export default ProductView;
