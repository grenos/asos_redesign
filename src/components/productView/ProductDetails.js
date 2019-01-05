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
import { withNavigation, SafeAreaView } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import get from 'lodash.get';
import HTML from 'react-native-render-html';

//!components
import AddToCartButton from '../addToCartButton/AddToCartButton';

class ProductDetails extends Component {
  //
  render() {
    const brand = get(this.props.apiResult, 'brand.name', 'loading');

    return (
      <View>
        <SafeAreaView />
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
        <View style={styles.addToCartContainer}>
          <AddToCartButton />
          <TouchableWithoutFeedback onPress={() => null}>
            <Icon name="ios-heart-empty" size={28} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => null}>
            <Icon name="ios-share-alt" size={33} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.addToCartContainer}>
          <AddToCartButton />
          <TouchableWithoutFeedback onPress={() => null}>
            <Icon name="ios-heart-empty" size={28} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => null}>
            <Icon name="ios-share-alt" size={33} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.addToCartContainer}>
          <AddToCartButton />
          <TouchableWithoutFeedback onPress={() => null}>
            <Icon name="ios-heart-empty" size={28} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => null}>
            <Icon name="ios-share-alt" size={33} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  brandContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('5%')
  },
  brand: {},
  addToCartContainer: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-around'
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
