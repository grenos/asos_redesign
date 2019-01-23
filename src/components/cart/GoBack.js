import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { wpW } from '../../helpers/helpers';
import Icon from 'react-native-vector-icons/Ionicons';

// redux
import {
  clearStateInput,
  clearStateCategory,
  clearStateOffset,
  clearStateApiResults
} from '../../store/actions/ApiActions';
import { connect } from 'react-redux';
import { compose } from 'redux';

const CartBackButon = props => {
  //
  const onGoBack = () => {
    // props.navigation.navigate('Product');
    props.navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={() => onGoBack()}>
      <View {...props} style={[styles.buttonContainer, props.style]}>
        <Icon name="ios-arrow-round-back" size={40} />
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
    marginLeft: wpW(7)
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});

const mapDispatchToProps = dispacth => {
  return {
    // clearInput: () => dispacth(clearStateInput()),
    // clearCategory: () => dispacth(clearStateCategory()),
    // clearOffset: () => dispacth(clearStateOffset())
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withNavigation
)(CartBackButon);
