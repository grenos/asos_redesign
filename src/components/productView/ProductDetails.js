import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

//!redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  toggleVideoTrue,
  toggleVideoFalse
} from '../../store/actions/UiActions';

//!libraries
import { iOSUIKit } from 'react-native-typography';
import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import get from 'lodash.get';

//!components
// import AddToCartButton from '../addToCartButton/AddToCartButton';

class ProductDetails extends Component {
  //

  render() {
    const brand = get(this.props.apiResult, 'brand.name', 'loading');

    return (
      <View>
        <View style={styles.brandContainer}>
          <Text style={[iOSUIKit.largeTitleEmphasized, styles.brand]}>
            {brand}
          </Text>
        </View>

        <View style={styles.brandContainer}>
          <Text style={[iOSUIKit.largeTitleEmphasized, styles.brand]}>
            {brand}
          </Text>
        </View>

        <View style={styles.brandContainer}>
          <Text style={[iOSUIKit.largeTitleEmphasized, styles.brand]}>
            {brand}
          </Text>
        </View>

        <View style={styles.brandContainer}>
          <Text style={[iOSUIKit.largeTitleEmphasized, styles.brand]}>
            {brand}
          </Text>
        </View>

        <View style={styles.brandContainer}>
          <Text style={[iOSUIKit.largeTitleEmphasized, styles.brand]}>
            {brand}
          </Text>
        </View>

        <View style={styles.brandContainer}>
          <Text style={[iOSUIKit.largeTitleEmphasized, styles.brand]}>
            {brand}
          </Text>
        </View>

        <View style={styles.brandContainer}>
          <Text style={[iOSUIKit.largeTitleEmphasized, styles.brand]}>
            {brand}
          </Text>
        </View>

        <View style={styles.brandContainer}>
          <Text style={[iOSUIKit.largeTitleEmphasized, styles.brand]}>
            {brand}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  brandContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
    marginBottom: hp('3%')
  },
  brand: {},
  addToCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: hp('3%')
  }
});

const mapStateToProps = state => {
  return {
    isVideo: state.uiReducer.isVideo,
    apiResult: state.apiReducer.apiResult
  };
};

const mapDispatchToProps = dispacth => {
  return {
    videoTrue: () => dispacth(toggleVideoTrue()),
    videoFalse: () => dispacth(toggleVideoFalse())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(ProductDetails);
