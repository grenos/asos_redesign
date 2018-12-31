//! react
import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';

//! redux
import { connect } from 'react-redux';
import { compose } from 'redux';

//! libraries
import { withNavigation } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import { iOSUIKit } from 'react-native-typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const { height, width } = Dimensions.get('window');

class ProductSlider extends Component {
  constructor() {
    super();
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    return (
      <ImageBackground
        source={item.img}
        style={styles.img}
        resizeMode="cover"
      />
    );
  }

  render() {
    return (
      <Carousel
        data={this.props.clothing}
        renderItem={this._renderItem}
        sliderWidth={wp('100%')}
        itemWidth={wp('50%')}
        inactiveSlideOpacity={1}
        enableSnap={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: wp('100%'),
    height: hp('100%')
  }
});

const mapStateToProps = state => {
  return {
    clothing: state.uiReducer.manCategories.clothing
  };
};

// const mapDispatchToProps = dispacth => {
//   return {
//     categoryName: name => dispacth(chooseNameCategory(name)),
//     searchProducts: () => dispacth(searchProducts())
//   };
// };

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withNavigation
)(ProductSlider);
