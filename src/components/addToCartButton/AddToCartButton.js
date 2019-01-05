import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
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
import Icon from 'react-native-vector-icons/Ionicons';

const AddToCartButton = props => {
  //
  const onGoBack = () => {
    props.clearInput();
    props.clearCategory();
    props.clearOffset();
    props.navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={() => onGoBack()}>
      <View {...props} style={[styles.buttonContainer, props.style]}>
        <Text style={styles.text}>ADD TO CART</Text>
        <Icon name="ios-cart" size={23} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: hp('1.5%'),
    paddingBottom: hp('1.5%'),
    paddingLeft: wp('10%'),
    paddingRight: wp('10%')
  },
  text: {
    fontSize: 18,
    color: '#fff'
  },
  icon: {
    color: '#fff',
    paddingLeft: wp('3%')
  }
});

const mapDispatchToProps = dispacth => {
  return {
    clearInput: () => dispacth(clearStateInput()),
    clearCategory: () => dispacth(clearStateCategory()),
    clearOffset: () => dispacth(clearStateOffset())
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withNavigation
)(AddToCartButton);
