import React, { Component } from 'react';
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';
import { iOSUIKit } from 'react-native-typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

class ProductsView extends Component {
  //
  // apply diferent styles based on index
  _renderItem = ({ item, index }) => {
    if (index % 2 == 0) {
      //even 0 2 4 6 etc
      return (
        <TouchableWithoutFeedback onPress={() => this._productSelected()}>
          <View style={styles.viewContainerEven}>
            <ImageBackground
              source={{ uri: `${item.images[0].url}` }}
              style={styles.imgStyleEven}
              resizeMode="cover"
            >
              <View style={styles.textContainerEven}>
                <Text style={[iOSUIKit.title3Emphasized, styles.brandName]}>
                  {item.brandName.toUpperCase()}
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <TouchableWithoutFeedback>
                  <Icon name="ios-heart-empty" size={24} />
                </TouchableWithoutFeedback>
              </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      //odd 1 3 5 7 etc
      return (
        <TouchableWithoutFeedback onPress={() => this._productSelected()}>
          <View style={styles.viewContainerOdd}>
            <ImageBackground
              source={{ uri: `${item.images[0].url}` }}
              style={styles.imgStyleOdd}
              resizeMode="cover"
            >
              <View style={styles.textContainerOdd}>
                <Text style={[iOSUIKit.title3Emphasized, styles.brandName]}>
                  {item.brandName.toUpperCase()}
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <TouchableWithoutFeedback>
                  <Icon name="ios-heart-empty" size={24} />
                </TouchableWithoutFeedback>
              </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  };

  _productSelected = () => {
    alert('item clicked');
  };

  _renderHeader = () => (
    <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
      OUR CATALOGUE
    </Text>
  );

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <FlatList
        style={{ paddingTop: hp('13%') }}
        data={this.props.apiResults}
        horizontal={false}
        numColumns={2}
        ListHeaderComponent={this._renderHeader}
        keyExtractor={this._keyExtractor}
        stickyHeaderIndices={[0]}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: hp('2%'),
    left: wp('1%')
  },
  viewContainerEven: {
    flex: 1,
    alignItems: 'flex-start',
    height: hp('40%')
  },
  viewContainerOdd: {
    flex: 1,
    alignItems: 'flex-end',
    height: hp('40%')
  },
  textContainerEven: {
    position: 'absolute',
    right: -wp('3%'),
    bottom: wp('5%'),
    backgroundColor: '#000',
    alignItems: 'center'
  },
  textContainerOdd: {
    position: 'absolute',
    left: -wp('3%'),
    bottom: wp('5%'),
    backgroundColor: '#000',
    alignItems: 'center'
  },
  brandName: {
    color: '#fff'
  },
  iconContainer: {
    position: 'absolute',
    right: wp('2%'),
    top: hp('1%')
  },
  imgStyleEven: {
    width: wp('47.5%'),
    height: '100%',
    position: 'absolute',
    paddingTop: hp('3%'),
    top: hp('10%')
  },
  imgStyleOdd: {
    width: wp('47.5%'),
    height: '100%',
    position: 'absolute',
    paddingTop: hp('3%')
  }
});

const mapStateToProps = state => {
  return {
    apiResults: state.apiReducer.apiResults
  };
};

// const mapDispatchToProps = dispacth => {
//   return {
//     categoryName: name => dispacth(chooseNameCategory(name)),
//     searchProducts: () => dispacth(searchProducts())
//   };
// };

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withNavigation
)(ProductsView);
