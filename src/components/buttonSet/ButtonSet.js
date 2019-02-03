import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

// redux
import {
  clearStateInput,
  clearStateCategory,
  clearStateOffset
} from '../../store/actions/ApiActions';
import { connect } from 'react-redux';
import { compose } from 'redux';

const ButtonSet = props => {
  //

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Favorites')}>
        <View {...props} style={[styles.buttonContainer, props.style]}>
          <Icon name="ios-heart" size={28} style={styles.icon} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('CartScreen')}>
        <View {...props} style={[styles.buttonContainer, props.style]}>
          <Icon name="ios-cart" size={28} style={styles.icon} />
        </View>
        {props.cart.length < 1 ? null : (
          <View style={styles.itemQuantityContainer}>
            <Text style={styles.itemQuantityText}>{props.cart.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  icon: {},
  buttonContainer: {
    marginRight: wp('7%')
  },
  itemQuantityContainer: {
    backgroundColor: 'red',
    position: 'absolute',
    right: wp('3%'),
    top: hp('2%'),
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
    cart: state.apiReducer.cart
  };
};

const mapDispatchToProps = dispacth => {
  return {
    clearInput: () => dispacth(clearStateInput()),
    clearCategory: () => dispacth(clearStateCategory()),
    clearOffset: () => dispacth(clearStateOffset())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(ButtonSet);
