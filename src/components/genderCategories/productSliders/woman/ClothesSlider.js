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
  chooseNameCategory,
  searchProducts
} from '../../../../store/actions/ApiActions';

//! stylesheet

//! libraries
import { withNavigation } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import { iOSUIKit } from 'react-native-typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const { height } = Dimensions.get('window');

class ClothesSlider extends Component {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <TouchableWithoutFeedback onPress={() => this._handleSubmit(item.name)}>
          <ImageBackground
            source={item.img}
            style={styles.img}
            resizeMode="cover"
          >
            <View style={styles.TextContainer}>
              <Text style={[iOSUIKit.subheadEmphasized, styles.name]}>
                {item.name.toUpperCase()}
              </Text>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  _handleSubmit(name) {
    // dispatch data to state
    this.props.categoryName(name);
    //call action
    this.props.searchProducts();
    // go to page
    this.props.navigation.navigate('Products');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
          CLOTHES
        </Text>
        <Carousel
          data={this.props.clothing}
          renderItem={this._renderItem}
          sliderWidth={wp('100%')}
          itemWidth={wp('50%')}
          inactiveSlideOpacity={1}
          enableSnap={false}
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
    clothing: state.uiReducer.womanCategories.clothing
  };
};

const mapDispatchToProps = dispacth => {
  return {
    categoryName: name => dispacth(chooseNameCategory(name)),
    searchProducts: () => dispacth(searchProducts())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(ClothesSlider);
