import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
//!redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  deleteCartItem,
  searchProduct,
  clearStateApiResult
} from '../../store/actions/ApiActions';
import { getNewTotalPrice, clearSize } from '../../store/actions/UiActions';
//!libraries
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { iOSUIKit } from 'react-native-typography';

//!helpers
import { deleteEuro, doMath } from '../../helpers/helpers';

class FavoritesView extends Component {
  componentDidMount() {
    // clear product
    // this.props.clearProduct()
  }

  onDeleteItem = ({ item }) => {
    // make another action
    this.props.deleteItem(item.id);
  };

  onItemPress = id => {
    this.props.getProduct(id);
    // this.props.clearSize()
  };

  _renderItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.onItemPress(item.id)}>
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.img}
            resizeMode="cover"
          />

          <View style={styles.nameContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            />
          </View>

          <View style={styles.detialsContainer}>
            <Text style={styles.price}>{item.text}</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity onPress={() => this.onDeleteItem({ item })}>
                <Icon name="ios-trash" size={40} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  _keyExtractor = item => item.id.toString();

  _brandsHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>YOUR FAVORITES</Text>
    </View>
  );

  _seperator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: '#F5F5F5',
        marginLeft: wp('30.5%')
      }}
    />
  );

  render() {
    let { items } = this.props;

    return (
      <View style={{ paddingTop: hp('13%') }}>
        <FlatList
          data={items}
          renderItem={this._renderItems}
          keyExtractor={this._keyExtractor}
          ListHeaderComponent={this._brandsHeader}
          ItemSeparatorComponent={this._seperator}
          stickyHeaderIndices={[0]}
          style={styles.flatlist}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    ...iOSUIKit.largeTitleEmphasized,
    backgroundColor: '#fff',
    paddingBottom: hp('3%'),
    marginLeft: wp('1%')
  },
  flatlist: {
    height: '100%',
    paddingBottom: 150
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginVertical: hp('0.5%'),
    marginHorizontal: wp('1%')
  },
  nameContainer: {
    flex: 4,
    justifyContent: 'center',
    height: hp('15%'),
    paddingLeft: wp('2%'),
    paddingRight: wp('1%')
  },
  detialsContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  img: {
    height: hp('15%'),
    width: wp('25%')
  },
  name: { ...iOSUIKit.title3, fontSize: wp('4.05%'), lineHeight: wp('4.2%') },
  price: { ...iOSUIKit.bodyEmphasized, fontSize: wp('4%') },
  size: { ...iOSUIKit.body },
  icon: {},
  checkoutAnimation: {
    position: 'absolute',
    bottom: 0
  },
  modifyButton: {
    backgroundColor: '#000',
    paddingVertical: 2,
    paddingHorizontal: 15
  },
  buttonText: {
    ...iOSUIKit.body,
    color: '#fff',
    textAlign: 'center'
  }
});

const mapStateToProps = state => {
  return {
    items: state.apiReducer.favorites
  };
};

const mapDispatchToProps = dispacth => {
  return {
    // deleteItem: id => dispacth(deleteCartItem(id)),
    // getTotal: price => dispacth(getNewTotalPrice(price)),
    // getProduct: id => dispacth(searchProduct(id)),
    // clearProduct: () => dispacth(clearStateApiResult()),
    // clearSize: () => dispacth(clearSize())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(FavoritesView);
