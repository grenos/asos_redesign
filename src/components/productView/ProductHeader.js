import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

//!redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  toggleVideoTrue,
  toggleVideoFalse
} from '../../store/actions/UiActions';
import { clearStateSimilarItems } from '../../store/actions/ApiActions';

//!libraries

import { withNavigation, SafeAreaView } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import get from 'lodash.get';

class ProductHeader extends Component {
  //

  onBackButton = () => {
    //this needs to be goBack but
    // there are problems with the similar item slider and
    // redux store. For now functionality is as is.
    this.props.navigation.navigate('Products');

    this.props.videoTrue();
    this.props.clearSimilar();
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
      <SafeAreaView forceInset={{ top: hp('7%') }}>
        <View style={styles.absoluteContainer}>
          <View style={styles.flexAlignLeft}>
            <View style={styles.backArrowContainer}>
              <TouchableWithoutFeedback onPress={() => this.onBackButton()}>
                <Icon name="ios-arrow-round-back" size={40} />
              </TouchableWithoutFeedback>
            </View>
          </View>

          <View style={styles.flexAlignRigt}>
            <View style={styles.iconsContainer}>
              {isVideo ? cameraIcon : videoIcon}

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
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  absoluteContainer: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 5
  },
  flexAlignLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    zIndex: 5
  },
  flexAlignRigt: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    zIndex: 5
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 5
  },
  backArrowContainer: {
    marginLeft: wp('7%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 5
  },
  iconContainer: {
    marginRight: wp('7%'),
    zIndex: 5
  },
  shareContainer: {
    marginRight: wp('7%'),
    zIndex: 5
  },
  heartContainer: {
    marginRight: wp('7%'),
    zIndex: 5
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
    videoFalse: () => dispacth(toggleVideoFalse()),
    clearSimilar: () => dispacth(clearStateSimilarItems())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(ProductHeader);
