import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

//!redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getSimilar } from '../../store/actions/ApiActions';

//!libraries
import { iOSUIKit } from 'react-native-typography';
import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import get from 'lodash.get';
import Icon from 'react-native-vector-icons/Ionicons';
import HTML from 'react-native-render-html';

import AssociatedProductsSlider from './AssociatedProductSlider';

class ProductDetails extends Component {
  //

  componentDidMount() {
    // call action
    this.props.completeTheLook();
  }

  render() {
    const brand = get(this.props.apiResult, 'brand.name', 'loading');
    const about = get(this.props.apiResult, 'info.aboutMe', 'loading');
    const careInfo = get(this.props.apiResult, 'info.careInfo', 'loading');
    const sizeAndFit = get(this.props.apiResult, 'info.sizeAndFit', null);
    const inStock = get(this.props.apiResult, 'isInStock', null);

    let isInStock = null;
    if (inStock) {
      isInStock = (
        <Text style={[iOSUIKit.title3, { color: '#689f38' }]}>In Stock</Text>
      );
    } else {
      isInStock = (
        <Text style={[iOSUIKit.title3, { color: '#e53935' }]}>
          Out of Stock
        </Text>
      );
    }

    let model = null;
    if (sizeAndFit) {
      model = (
        <View style={styles.instructionsContainer}>
          <Icon name="ios-body" size={40} style={styles.icon} />
          <HTML
            html={sizeAndFit}
            containerStyle={htmlStyles.container}
            ignoredTags={['br']}
          />
        </View>
      );
    }

    return (
      <View style={{ paddingBottom: 100 }}>
        <View style={styles.brandContainer}>
          <Text style={iOSUIKit.largeTitleEmphasized}>{brand}</Text>
        </View>

        <View style={styles.stockContainer}>
          <Text>{isInStock}</Text>
        </View>

        <View style={styles.instructionsContainer}>
          <Icon name="ios-flower" size={40} style={styles.icon} />
          <HTML
            html={about}
            containerStyle={htmlStyles.container}
            ignoredTags={['br']}
          />
        </View>

        <View style={styles.instructionsContainer}>
          <Icon name="ios-color-filter" size={40} style={styles.icon} />
          <HTML
            html={careInfo}
            containerStyle={htmlStyles.container}
            ignoredTags={['br']}
          />
        </View>

        {model}

        <View>
          <AssociatedProductsSlider />
        </View>
      </View>
    );
  }
}

const htmlStyles = {
  container: {
    width: wp('70%')
  }
};

const styles = StyleSheet.create({
  brandContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
    marginBottom: hp('1.5%')
  },
  stockContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1.5%'),
    marginBottom: hp('1.5%')
  },
  icon: {
    margin: 20
  },
  instructionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('3%')
  }
});

const mapStateToProps = state => {
  return {
    apiResult: state.apiReducer.apiResult
  };
};

const mapDispatchToProps = dispacth => {
  return {
    completeTheLook: () => dispacth(getSimilar())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(ProductDetails);
