import React, { Component } from 'react';
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';
import { iOSUIKit } from 'react-native-typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

class ProductsView extends Component {
  //
  // apply diferent styles based on index
  _renderItem = ({ item, index }) => {
    if (index % 2 == 0) {
      //even 0 2 4 6 etc
      return (
        <View key={item.key} style={styles.viewContainerEven}>
          <ImageBackground
            source={{ uri: `${item.images[0].url}` }}
            style={styles.imgStyleEven}
            resizeMode="cover"
          >
            <Text style={[iOSUIKit.title3Emphasized, styles.brandName]}>
              {item.brandName.toUpperCase()}
            </Text>
          </ImageBackground>
        </View>
      );
    } else {
      //odd 1 3 5 7 etc
      return (
        <View key={item.key} style={styles.viewContainerOdd}>
          <ImageBackground
            source={{ uri: `${item.images[0].url}` }}
            style={styles.imgStyleOdd}
            resizeMode="cover"
          >
            <Text style={[iOSUIKit.title3Emphasized, styles.brandName]}>
              {item.brandName.toUpperCase()}
            </Text>
          </ImageBackground>
        </View>
      );
    }
  };

  _renderHeader = () => (
    <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
      OUR CATALOGUE
    </Text>
  );

  render() {
    return (
      <FlatList
        style={{ paddingTop: hp('13%') }}
        data={this.props.apiResults}
        horizontal={false}
        numColumns={2}
        ListHeaderComponent={this._renderHeader}
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
    height: hp('40%'),
    zIndex: 2
  },
  viewContainerOdd: {
    flex: 1,
    alignItems: 'flex-start',
    height: hp('40%')
  },
  brandName: {
    transform: [{ rotate: '90deg' }]
    // position: 'absolute',
    // left: 0
    // top: 130,
    // padding: 0,
    // margin: 0
  },
  imgStyleEven: {
    width: wp('45%'),
    height: '100%',
    position: 'absolute',
    paddingTop: hp('3%'),
    top: hp('10%')
  },
  imgStyleOdd: {
    width: wp('45%'),
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
