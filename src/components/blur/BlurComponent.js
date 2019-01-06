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
  }
});
