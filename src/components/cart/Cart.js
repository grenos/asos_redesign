import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
//!redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteCartItem, searchProduct, clearStateApiResult } from '../../store/actions/ApiActions'
import { getNewTotalPrice } from '../../store/actions/UiActions';
//!libraries
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { iOSUIKit } from 'react-native-typography';
//!components
import Checkout from './Checkout';
//!helpers
import { deleteEuro, doMath } from '../../helpers/helpers';



class Cart extends Component {
  state = {
    slideUp: new Animated.Value(hp('15%'))
  };

  componentDidMount() {
    // clear product 
    this.props.clearProduct()


    Animated.timing(
      // Animate over time
      this.state.slideUp,
      {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }
    ).start();
  }

  onDeleteItem = ({ item }) => {
    this.props.deleteItem(item.id)

    // helper functions
    // convert string to number
    let priceNoEu = deleteEuro(item.price);
    let makeNumber = doMath(priceNoEu);
    // dispatch action
    this.props.getTotal(makeNumber);

    // clear product 
    // this.props.clearProduct()

  }

  onItemPress = id => {
    this.props.getProduct(id);
  }

  _renderItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.onItemPress(item.id)}>
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: `https://${item.image}` }}
            style={styles.img}
            resizeMode="cover"
          />

          <View style={styles.nameContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.modifyButton} onPress={() => this.props.navigation.navigate('ModifySize')}>
                <Text style={styles.buttonText}>Size: {item.size ? item.size.toUpperCase() : 'n/a'}</Text>
              </View>
            </View>
          </View>

          <View style={styles.detialsContainer}>
            <Text style={styles.price}>{item.price}</Text>
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
      <Text style={styles.header}>YOUR PRODUCTS</Text>
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
    let { slideUp } = this.state;

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
        <Animated.View
          style={[
            styles.checkoutAnimation,
            { transform: [{ translateY: slideUp }] }
          ]}
        >
          <Checkout total={this.props.total.toFixed(2)} />
        </Animated.View>
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
    justifyContent: 'space-evenly',
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
    items: state.apiReducer.cart,
    total: state.uiReducer.totalPrice,
    product: state.apiReducer.apiResult
  };
};

const mapDispatchToProps = dispacth => {
  return {
    deleteItem: id => dispacth(deleteCartItem(id)),
    getTotal: price => dispacth(getNewTotalPrice(price)),
    getProduct: id => dispacth(searchProduct(id)),
    clearProduct: () => dispacth(clearStateApiResult())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(Cart);
