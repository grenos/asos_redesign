import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

// redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

const SizesButton = props => {
  //
  const openModal = () => {
    props.navigation.navigate('FindSizeModal');
  };

  return (
    <TouchableWithoutFeedback onPress={() => openModal()}>
      <View {...props} style={[styles.buttonContainer, props.style]}>
        <Text style={styles.text}>SIZES</Text>
        <Icon name="ios-shirt" size={23} style={styles.icon} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
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
  }
});

const mapStateToProps = state => {
  return {
    isVideo: state.uiReducer.isVideo,
    apiResult: state.apiReducer.apiResult
  };
};

export default compose(
  connect(mapStateToProps),
  withNavigation
)(SizesButton);
