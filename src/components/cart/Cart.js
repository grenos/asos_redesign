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
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getTotalPrice } from '../../store/actions/UiActions';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { iOSUIKit } from 'react-native-typography';

import Checkout from './Checkout';
import { deleteEuro, doMath } from '../../helpers/helpers';

class Cart extends Component {
  state = {
    slideUp: new Animated.Value(hp('15%'))
  };

  componentDidMount() {
    this.props.items.map(item => {
      let price = item.price;

      // helper functions
      let priceNoEu = deleteEuro(price);
      let makeNumber = doMath(priceNoEu);

      // dispatch action
      this.props.getTotal(makeNumber);
    });

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

  _renderItems = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: `https://${item.image}` }}
            style={styles.img}
            resizeMode="cover"
          />

          <View style={styles.nameContainer}>
            <Text>{item.name}</Text>
            <Text>Size: {item.size.toUpperCase()}</Text>
          </View>

          <View style={styles.detialsContainer}>
            <Text>{item.price}</Text>
            <View style={styles.iconsContainer}>
              <Icon name="ios-close" size={40} style={styles.icon} />
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
          <Checkout total={this.props.total} />
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
    height: '100%'
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
    flex: 3,

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
    height: hp('10%'),
    width: wp('25%')
  },
  name: { ...iOSUIKit.body },
  price: { ...iOSUIKit.bodyEmphasized, fontSize: 20 },
  size: { ...iOSUIKit.body },
  icon: {},
  checkoutAnimation: {
    position: 'absolute',
    bottom: 0
  }
});

const mapStateToProps = state => {
  return {
    items: state.apiReducer.cart,
    total: state.uiReducer.totalPrice
  };
};

const mapDispatchToProps = dispacth => {
  return {
    getTotal: price => dispacth(getTotalPrice(price))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(Cart);
