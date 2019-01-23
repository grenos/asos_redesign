import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

class Cart extends Component {
  _renderItems = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: `https://${item.image}` }}
            style={styles.img}
            resizeMode="cover"
          />
          <Text>{item.name}</Text>
          <View style={styles.detialsContainer}>
            <Text>{item.price}</Text>
            <View style={styles.iconsContainer}>
              <Text>{item.size.toUpperCase()}</Text>
              <Icon />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  _keyExtractor = item => item.id.toString();

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
    let { items } = this.props;
    return (
      <View style={{ paddingBottom: 150 }}>
        <FlatList
          data={items}
          renderItem={this._renderItems}
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  detialsContainer: {
    flexDirection: 'column'
  },
  iconsContainer: {
    flexDirection: 'row'
  },
  img: {
    height: hp('10%'),
    width: wp('10%')
  }
});

const mapStateToProps = state => {
  return {
    items: state.apiReducer.cart
  };
};

const mapDispatchToProps = dispacth => {
  return {};
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(Cart);
