import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
// redux
import { addToCart } from '../../store/actions/ApiActions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import get from 'lodash.get';

const AddToCartButton = props => {
  //
  const onAddToCart = () => {
    let id = props.id;
    let image = props.image;
    let name = props.name;
    let size = props.size;
    let price = props.price;
    let cart = props.cart;
    let { isNoSize } = props;

    let itemId = [];
    cart.map(item => {
      itemId.push(item.id);
    });

    if (!size && !isNoSize) {
      alert('please select a size first');
    } else if (itemId.includes(id)) {
      alert('item is already in your cart');
    } else {
      props.addItemToCart(id, image, name, size, price);
    }
  };

  const { isNoSize } = props;
  return (
    <TouchableWithoutFeedback onPress={() => onAddToCart()}>
      <View {...props} style={[styles.buttonContainer, props.style]}>
        {props.cart.length < 1 ? null : (
          <View
            style={[
              styles.itemQuantityContainer,
              !isNoSize ? { right: wp('10%') } : { right: wp('37%') }
            ]}
          >
            <Text style={styles.itemQuantityText}>{props.cart.length}</Text>
          </View>
        )}
        <Text style={styles.text}>CART</Text>
        <Icon name="ios-cart" size={23} style={styles.icon} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: hp('1.5%'),
    paddingBottom: hp('1.5%'),
    paddingLeft: wp('10%'),
    paddingRight: wp('10%'),
    borderColor: '#bdbdbd',
    borderWidth: 1
  },
  text: {
    fontSize: 18,
    color: '#000'
  },
  icon: {
    color: '#000',
    paddingLeft: wp('3%')
  },
  itemQuantityContainer: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: hp('5%'),
    height: 20,
    width: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemQuantityText: {
    color: '#fff'
  }
});

const mapStateToProps = state => {
  return {
    name: state.apiReducer.apiResult.name,
    id: state.apiReducer.apiResult.id,
    image: state.apiReducer.apiResult.media.images[0].url,
    price: state.apiReducer.apiResult.price.current.text,
    size: state.uiReducer.sizeChosen,
    cart: state.apiReducer.cart,
    isNoSize: state.apiReducer.apiResult.isNoSize
  };
};

const mapDispatchToProps = dispacth => {
  return {
    addItemToCart: (id, image, name, size, price) =>
      dispacth(addToCart(id, image, name, size, price)),
    clearSimilar: () => dispacth(clearStateSimilarItems())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(AddToCartButton);
