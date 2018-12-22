import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';
import { iOSUIKit } from 'react-native-typography';
import SearchContainer from '../../components/searchBar/SearchContainer';

export default function SearchProductModal() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <BlurView style={styles.absolute} blurType="light" blurAmount={20} />
      <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>SEARCH</Text>
      <SearchContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
