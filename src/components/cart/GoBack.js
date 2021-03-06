import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { wpW } from '../../helpers/helpers';
import Icon from 'react-native-vector-icons/Ionicons';

// redux
import { clearSize } from '../../store/actions/UiActions';
import { connect } from 'react-redux';
import { compose } from 'redux';

const CartBackButon = props => {
  //

  const onGoBack = () => {
    //! here need to find way to get nav state history
    //! and navigate conditionally to back if any place
    //! to product page if went to cart from product page
    // https://reactnavigation.org/docs/en/screen-tracking.html
    // props.navigation.navigate('Product');
    props.clearSizes();
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
    clearSizes: () => dispacth(clearSize())
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withNavigation
)(CartBackButon);
