import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
//!redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  chooseBrandName,
  searchProducts
} from '../../store/actions/ApiActions';
//! libraries
import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { iOSUIKit } from 'react-native-typography';

class BrandList extends Component {
  //
  _renderBrands = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.brandContainer}
        onPress={() => this.makeApiCall(item)}
      >
        <Text style={styles.brandText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  makeApiCall = item => {
    this.props.brandName(item);
    this.props.searchBrands();
    this.props.navigation.navigate('Products');
  };

  _keyExtractor = item => item;

  _brandsHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>TOP BRANDS</Text>
    </View>
  );

  _seperator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: '#F5F5F5'
      }}
    />
  );

  render() {
    let { brands } = this.props;
    let brandsShorted = brands.sort();

    return (
      <View style={{ paddingBottom: 150 }}>
        <FlatList
          data={brandsShorted}
          renderItem={this._renderBrands}
          keyExtractor={this._keyExtractor}
          ListHeaderComponent={this._brandsHeader}
          ItemSeparatorComponent={this._seperator}
          stickyHeaderIndices={[0]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#F5F5F5',
    backgroundColor: '#fff',
    paddingVertical: hp('2%')
  },
  header: {
    ...iOSUIKit.title3Emphasized
  },
  brandContainer: {
    padding: '3%'
  },
  brandText: {
    ...iOSUIKit.body
  }
});

const mapStateToProps = state => {
  return {
    brands: state.uiReducer.topBrands
  };
};

const mapDispatchToProps = dispacth => {
  return {
    brandName: item => dispacth(chooseBrandName(item)),
    searchBrands: () => dispacth(searchProducts())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(BrandList);
