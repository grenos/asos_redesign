import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';

export default () => {
  return (
    <>
      <BlurView style={styles.container} blurType="light" blurAmount={50} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  absolute: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0
  }
});
