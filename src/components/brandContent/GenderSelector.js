import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//!redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import { chooseGenderCategory } from '../../store/actions/ApiActions';

import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { iOSUIKit } from 'react-native-typography';

const GenderSelector = props => {
  const handleNavigation = id => {
    if (id === 'women') {
      // send id of selected gender to apiReducer here
      props.chooseGender(id);
    } else {
      // send id to apiReducer here
      props.chooseGender(id);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.genderContainer,
          { borderRightWidth: 1, borderRightColor: '#f5f5f5' }
        ]}
        onPress={() => handleNavigation(props.genders[0].id)}
      >
        <Text
          style={[
            styles.text,
            props.genderSelected == 'women' ? styles.underline : null
          ]}
        >
          Woman
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.genderContainer}
        onPress={() => handleNavigation(props.genders[1].id)}
      >
        <Text
          style={[
            styles.text,
            props.genderSelected == 'men' ? styles.underline : null
          ]}
        >
          Man
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('7%'),
    borderWidth: 1,
    borderColor: '#F5F5F5'
  },
  genderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    ...iOSUIKit.title3
  },
  underline: {
    textDecorationLine: 'underline'
  }
});

const mapStateToProps = state => {
  return {
    genders: state.uiReducer.genders,
    genderSelected: state.apiReducer.chooseGender
  };
};

const mapDispatchToProps = dispacth => {
  return {
    chooseGender: id => dispacth(chooseGenderCategory(id))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(GenderSelector);
