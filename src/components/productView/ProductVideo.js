//! react
import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
//! redux
import { connect } from 'react-redux';
//! libraries
import Video from 'react-native-video';
import get from 'lodash.get';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const { height, width } = Dimensions.get('window');

class ProductVideo extends Component {
  render() {
    const video = get(this.props.apiResult, 'media.catwalk', 'loading');

    if (video) {
      return (
        <Video
          source={{ uri: `https://${video[0].url}.m3u8` }}
          maxBitRate={1199628}
          resizeMode="cover"
          repeat={false}
          onEnd={() => {
            this.player.seek(0);
          }}
          ref={ref => {
            this.player = ref;
          }}
          style={[styles.img]}
        />
      );
    } else {
      // use loading component
      return <Text>LOADING</Text>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('100%')
  },
  img: {
    width: wp('100%'),
    height: hp('100%')
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0
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
)(ProductVideo);

// poster={`https://${video[0].url}`}
