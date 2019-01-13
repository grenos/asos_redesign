import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Linking
} from 'react-native';

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
import { WebView } from 'react-native-webview';

import AssociatedProductsSlider from './AssociatedProductSlider';

class ProductDetails extends Component {
  //

  componentDidMount() {
    // call action
    this.props.completeTheLook();
  }

  // _handleLinkPress = () => {
  //   Linking.canOpenURL(this.props.url).then(supported => {
  //     if (supported) {
  //       Linking.openURL(this.props.url);
  //     } else {
  //       console.log("Don't know how to open URI: " + this.props.url);
  //     }
  //   });
  // };

  render() {
    const brand = get(this.props.apiResult, 'brand.name', 'loading');
    const brandDesc = get(this.props.apiResult, 'brand.description', 'loading');
    const about = get(this.props.apiResult, 'info.aboutMe', 'loading');
    const careInfo = get(this.props.apiResult, 'info.careInfo', 'loading');
    const sizeAndFit = get(this.props.apiResult, 'info.sizeAndFit', null);
    const inStock = get(this.props.apiResult, 'isInStock', null);
    //see if array has items by checking if has 0 index (at least one item)
    const similarItem = get(this.props.similarItems, 0, null);

    let { productCode } = this.props.apiResult;

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

    let similar = null;
    if (similarItem) {
      similar = <AssociatedProductsSlider />;
    }

    return (
      <View style={{ paddingBottom: 100 }}>
        <View style={styles.brandContainer}>
          <Text style={iOSUIKit.largeTitleEmphasized}>{brand}</Text>
        </View>

        <View style={styles.stockContainer}>
          <Text>{isInStock}</Text>
        </View>

        <View style={styles.productCodeContainer}>
          <Text>Product Code: {productCode}</Text>
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

        <View style={styles.brandDescContainer}>
          <Text style={[iOSUIKit.title3Emphasized, styles.brandTitle]}>
            {brand}
          </Text>
          <HTML
            html={brandDesc}
            tagsStyles={{ a: { color: '#000', textDecorationLine: 'none' } }}
            containerStyle={htmlStyles.container}
            ignoredTags={['br']}
          />
        </View>

        <View>{similar}</View>
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
    marginBottom: hp('.5%')
  },
  productCodeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('3%')
  },
  icon: {
    margin: 20
  },
  instructionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('3%')
  },
  brandDescContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  brandTitle: {
    marginBottom: hp('2%')
  }
});

const mapStateToProps = state => {
  return {
    apiResult: state.apiReducer.apiResult,
    similarItems: state.apiReducer.similarItems
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
