import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { iOSUIKit } from 'react-native-typography';

import Blur from '../blur/BlurComponent';
import Icon from 'react-native-vector-icons/Ionicons';

class ProductSizes extends Component {
  //
  render() {
    return (
      <View>
        <View style={styles.topView}>
          <Blur />
          <View style={styles.textContainer}>
            <Text style={styles.text}>PICK YOUR SIZE</Text>
          </View>
          <View style={styles.backButton}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="ios-arrow-round-back" size={38} style={styles.icon} />
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity>
            <View style={styles.sizeView}>
              <Text style={styles.sizes}>S</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.sizeView}>
              <Text style={styles.sizes}>M</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.sizeView}>
              <Text style={styles.sizes}>L</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.sizeView}>
              <Text style={styles.sizes}>XL</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  topView: {
    height: hp('50%')
  },
  textContainer: {
    height: hp('50%'),
    position: 'absolute',
    top: hp('14%'),
    left: 0
  },
  text: {
    ...iOSUIKit.largeTitleEmphasized,
    fontSize: wp('28%'),
    paddingTop: hp('4%'),
    lineHeight: wp('20.5%')
  },
  bottomView: {
    backgroundColor: '#fff',
    height: hp('50%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: wp('7%')
  },
  sizeView: {
    width: wp('100%'),
    paddingVertical: hp('3%')
  },
  sizes: {
    ...iOSUIKit.title3
  },
  backButton: {
    position: 'absolute',
    top: hp('7%'),
    left: wp('7%')
  }
});

const mapDispatchToProps = dispacth => {
  return {
    videoTrue: () => dispacth(toggleVideoTrue()),
    videoFalse: () => dispacth(toggleVideoFalse())
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withNavigation
)(ProductSizes);
