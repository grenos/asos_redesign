import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';
import { iOSUIKit } from 'react-native-typography';
import SearchContainer from '../../components/searchBar/SearchContainer';
import BackButon from '../../components/backButton/BackButton';
import { wpW, wpH } from '../../helpers/helpers';

const SearchProductModal = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <BlurView style={styles.absolute} blurType="light" blurAmount={20} />
      <BackButon style={styles.button} />
      <Text style={[iOSUIKit.title3Emphasized, styles.header]}>
        Search our catalog here
      </Text>
      <SearchContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: '17%',
    borderBottomWidth: 0,
    marginTop: '3%'
  },
  header: {
    marginLeft: wpW(7),
    marginTop: wpH(5),
    marginBottom: wpH(0)
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default SearchProductModal;