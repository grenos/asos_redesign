import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

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
import HTML from 'react-native-render-html';
import { linkSync } from 'fs';

class ProductDetails extends Component {
  //
  render() {
    let { description } = this.props.apiResult;
    const ItemDescription = description;

    const brand = get(this.props.apiResult, 'brand.name', 'loading');

    return (
      <View>
        <View style={styles.brandContainer}>
          <Text style={[iOSUIKit.largeTitleEmphasized, styles.brand]}>
            {brand}
          </Text>
        </View>

        <View style={styles.descContainer}>
          <HTML
            html={ItemDescription}
            style={[iOSUIKit.body]}
            containerStyle={null}
            listsPrefixesRenderers={{
              ul: () => {
                return null;
              },
              li: () => {
                return null;
              }
            }}
            tagsStyles={{
              tagsStyles: {
                a: { textAlign: 'center', fontStyle: 'italic', color: 'yellow' }
              }
            }}
          />
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
  descContainer: {},
  brand: {}
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
