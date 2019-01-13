//! react
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground
} from 'react-native';
//! redux
import { connect } from 'react-redux';
//! libraries
import Swiper from 'react-native-swiper';
import get from 'lodash.get';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const { height, width } = Dimensions.get('window');

class ProductSlider extends Component {
  render() {
    const images = get(this.props.apiResult, 'media.images', 'loading');

    if (images) {
      return (
        <View style={styles.wrapper}>
          <Swiper
            showsButtons={false}
            activeDotColor="#000"
            paginationStyle={styles.pagination}
          >
            {images.map((image, index) => {
              return (
                <View style={styles.slide} key={index}>
                  <ImageBackground
                    style={styles.img}
                    source={{ uri: `https://${image.url}` }}
                    resizeMode="cover"
                  />
                </View>
              );
            })}
          </Swiper>
        </View>
      );
    } else {
      // use loading component
      return <Text>LOADING</Text>;
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: hp('100%'),
    width: wp('100%')
  },
  img: {
    height: hp('100%'),
    width: wp('100%')
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pagination: {
    justifyContent: 'flex-start',
    marginLeft: wp('7%'),
    marginBottom: hp('4.5%')
  }
});

const mapStateToProps = state => {
  return {
    apiResult: state.apiReducer.apiResult
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductSlider);
