import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { wpW } from '../../helpers/helpers';

const BackButon = props => {
  return (
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <View style={styles.buttonContainer}>
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

export default withNavigation(BackButon);
