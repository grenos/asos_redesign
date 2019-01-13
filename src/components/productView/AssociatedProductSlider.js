//! react
import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';

//! redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  clearStateSimilarItems,
  searchProduct
} from '../../store/actions/ApiActions';

import {
  toggleShoeCategoryTrue,
  toggleShoeCategoryFalse
} from '../../store/actions/UiActions';

//! libraries
import { withNavigation } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import { iOSUIKit } from 'react-native-typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

//!helpers
import { substring } from '../../helpers/helpers';
const { height } = Dimensions.get('window');

class AssociatedProductsSlider extends Component {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item, index }) {
    let id = item.id;
    return (
      <View style={styles.slide}>
        <TouchableWithoutFeedback onPress={() => this._productSelected(id)}>
          <ImageBackground
            source={{ uri: `https://${item.images[1].url}` }}
            style={styles.img}
            resizeMode="cover"
          >
            <View style={styles.TextContainer}>
              <Text style={[iOSUIKit.subheadEmphasized, styles.name]}>
                {item.brandName.toUpperCase()}
              </Text>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  _productSelected = id => {
    //make new search based on product id
    this.props.searchProduct(id);

    //! THIS GET NAME OF CURRENT PRODUCT AND NOT THE ONE CLICKED!!!!
    //? NEEDS TO BE FIXED!!!!
    //* CHECK IF IT CAN GO TO ACTIONS
    // get name hack from helpers find if user has clicked
    // on shoes category
    const { name } = this.props.apiResult;
    console.log(name);
    // if keyword exists in array
    if (substring.indexOf(name) > -1) {
      //set shoe true for sizes component
      this.props.toggleShoeTrue();
    } else {
      //togle sue false action
      this.props.toggleShoeFalse();
    }

    // clear similar from store
    this.props.clearSimilar();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
          COMPLETE THE LOOK
        </Text>
        <Carousel
          data={this.props.similarItems}
          renderItem={this._renderItem}
          sliderWidth={wp('100%')}
          itemWidth={wp('50%')}
          inactiveSlideOpacity={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp('10%')
  },
  header: {
    position: 'absolute',
    zIndex: 3,
    top: height < 668 ? -hp('2.7%') : -hp('2.2%')
  },
  slide: {},
  name: {
    fontSize: 20
  },
  img: {
    width: wp('50%'),
    height: height < 737 ? hp('37%') : hp('35%')
  },
  TextContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: -20
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
    clearSimilar: () => dispacth(clearStateSimilarItems()),
    searchProduct: id => dispacth(searchProduct(id)),
    toggleShoeTrue: () => dispacth(toggleShoeCategoryTrue()),
    toggleShoeFalse: () => dispacth(toggleShoeCategoryFalse())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(AssociatedProductsSlider);
