import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

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
import Icon from 'react-native-vector-icons/Ionicons';
import get from 'lodash.get';

//!components
import ProductVideo from './ProductVideo';
import ProductSlider from './ProductSlider';

class ProductHero extends Component {
  //

  onBackButton = () => {
    this.props.navigation.goBack();
    this.props.videoTrue();
  };

  render() {
    let { isVideo } = this.props;
    let cameraIcon = null;
    let videoIcon = null;

    let { name } = this.props.apiResult;
    const price = get(this.props.apiResult, 'price.current.text', 'loading');
    const videoExists = get(this.props.apiResult, 'media.catwalk', 'loading');

    if (isVideo) {
      cameraIcon = (
        <View style={styles.iconContainer}>
          <TouchableWithoutFeedback onPress={() => this.props.videoFalse()}>
            <Icon name="ios-camera" size={40} />
          </TouchableWithoutFeedback>
        </View>
      );
    } else {
      videoIcon = (
        <View style={styles.iconContainer}>
          <TouchableWithoutFeedback onPress={() => this.props.videoTrue()}>
            <Icon name="ios-reverse-camera" size={40} />
          </TouchableWithoutFeedback>
        </View>
      );
    }

    if (videoExists == 0) {
      videoIcon = null;
      cameraIcon = null;
    }

    return (
      <View>
        {isVideo && videoExists != 0 ? <ProductVideo /> : <ProductSlider />}
        {isVideo ? cameraIcon : videoIcon}

        <View style={styles.backArrowContainer}>
          <TouchableWithoutFeedback onPress={() => this.onBackButton()}>
            <Icon name="ios-arrow-round-back" size={40} />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.shareContainer}>
          <TouchableWithoutFeedback
            onPress={() => alert('will open share to social menu')}
          >
            <Icon name="ios-share-alt" size={33} />
          </TouchableWithoutFeedback>
        </View>

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
  iconContainer: {
    position: 'absolute',
    right: wp('22%'),
    top: hp('7%')
  },
  backArrowContainer: {
    position: 'absolute',
    left: wp('7%'),
    top: hp('7%')
  },
  shareContainer: {
    position: 'absolute',
    right: wp('7%'),
    top: hp('7.5%')
  },
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
)(ProductHero);
