import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { wpW } from '../../helpers/helpers';

// redux
import {
  clearStateInput,
  clearStateCategory,
  clearStateOffset,
  clearStateApiResults
} from '../../store/actions/ApiActions';
import { connect } from 'react-redux';
import { compose } from 'redux';

const BackButon = props => {
  //
  const onGoBack = () => {
    props.clearInput();
    props.clearCategory();
    props.clearOffset();
    props.clearApiResults();
    props.navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={() => onGoBack()}>
      <View {...props} style={[styles.buttonContainer, props.style]}>
        <Text style={styles.text}>BACK</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 2,
    marginLeft: wpW(7)
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});

const mapDispatchToProps = dispacth => {
  return {
    clearInput: () => dispacth(clearStateInput()),
    clearCategory: () => dispacth(clearStateCategory()),
    clearOffset: () => dispacth(clearStateOffset()),
    clearApiResults: () => dispacth(clearStateApiResults())
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withNavigation
)(BackButon);
