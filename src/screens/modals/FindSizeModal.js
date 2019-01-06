import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text>MODAL TESTT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
