import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { wpW } from '../../helpers/helpers';
import Icon from 'react-native-vector-icons/Ionicons';

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
  const onGoBack = () => {
    props.clearInput();
    props.clearCategory();
    props.clearOffset();
    props.navigation.goBack();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => onGoBack()}>
        <View {...props} style={[styles.buttonContainer, props.style]}>
          <Icon name="ios-heart" size={28} style={styles.icon} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('CartScreen')}>
        <View {...props} style={[styles.buttonContainer, props.style]}>
          <Icon name="ios-cart" size={28} style={styles.icon} />
        </View>
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
    marginRight: wpW(7)
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
)(ButtonSet);
