import React, { Component } from 'react';
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

//! redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  setOffset,
  searchProducts,
  searchProduct
} from '../../store/actions/ApiActions';

//! libraries
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
    let id = item.id;

    if (index % 2 == 0) {
      //even 0 2 4 6 etc
      return (
        <TouchableWithoutFeedback onPress={() => this._productSelected(id)}>
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
        <TouchableWithoutFeedback onPress={() => this._productSelected(id)}>
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

  _productSelected = id => {
    this.props.searchProduct(id);
  };

  _renderHeader = () => (
    <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
      {this.props.categoryName
        ? this.props.categoryName.toUpperCase()
        : this.props.searchName.toUpperCase()}
    </Text>
  );

  _keyExtractor = item => item.id;

  _onEndReached = () => {
    this.props.updateOffset(50);
    // make api call
    this.props.searchProducts();
  };

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
        onEndReached={this._onEndReached}
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
    apiResults: state.apiReducer.apiResults,
    categoryName: state.apiReducer.selectedCategoryName,
    searchName: state.apiReducer.searchInput
  };
};

const mapDispatchToProps = dispacth => {
  return {
    // categoryName: name => dispacth(chooseNameCategory(name)),
    searchProducts: () => dispacth(searchProducts()),
    updateOffset: offset => dispacth(setOffset(offset)),
    searchProduct: id => dispacth(searchProduct(id))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(ProductsView);
