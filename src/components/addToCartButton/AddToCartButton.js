import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { wpW } from '../../helpers/helpers';

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
        <Icon name="ios-cart" size={30} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  buttonContainer: {
    flexDirection: 'row',
    borderBottomColor: '#000',
    paddingBottom: 2,
    marginLeft: wpW(7)
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
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
