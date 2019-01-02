import React, { Component } from 'react';
import {
  Animated,
  View,
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
import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import get from 'lodash.get';

class ProductHeader extends Component {
  //

  onBackButton = () => {
    this.props.navigation.goBack();
    this.props.videoTrue();
  };

  render() {
    let { isVideo } = this.props;
    let cameraIcon = null;
    let videoIcon = null;

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
      <View style={styles.absoluteContainer}>
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

        <View style={styles.heartContainer}>
          <TouchableWithoutFeedback
            onPress={() => alert('will save to favorites')}
          >
            <Icon name="ios-heart-empty" size={28} />
          </TouchableWithoutFeedback>
        </View>
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
  iconContainer: {
    position: 'absolute',
    right: wp('38%'),
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
  heartContainer: {
    position: 'absolute',
    right: wp('22%'),
    top: hp('8%')
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
)(ProductHeader);
