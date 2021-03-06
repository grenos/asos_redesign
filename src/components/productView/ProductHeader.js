import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

//!redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  toggleVideoTrue,
  toggleVideoFalse,
  clearSize
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
  	// on click of similar item slider just change the contents of product page
		// and does not act like a new screen is loaded/pushed
		// so i used push as "push new page on top on the stack"
		// For now functionality remains as is.

		this.props.navigation.navigate('Products');

    this.props.videoTrue();
    this.props.clearSimilar();
    this.props.clearSizes();
  };

  onCartButton = () => {
    this.props.navigation.navigate('CartScreen');
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

              <View style={styles.shareContainer}>
                <TouchableWithoutFeedback onPress={() => this.onCartButton()}>
                  <Icon name="ios-cart" size={33} />
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
		apiResult: state.apiReducer.apiResult,
    apiResults: state.apiReducer.apiResults,
		favorites: state.apiReducer.favorites
  };
};

const mapDispatchToProps = dispacth => {
  return {
    videoTrue: () => dispacth(toggleVideoTrue()),
    videoFalse: () => dispacth(toggleVideoFalse()),
    clearSimilar: () => dispacth(clearStateSimilarItems()),
    clearSizes: () => dispacth(clearSize())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(ProductHeader);
