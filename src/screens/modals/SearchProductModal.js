import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { BlurView } from 'react-native-blur';
import { iOSUIKit } from 'react-native-typography';
import SearchContainer from '../../components/searchBar/SearchContainer';
import ModalBackButton from '../../components/modalBackButton/ModalBackButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const SearchProductModal = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <BlurView style={styles.absolute} blurType="light" blurAmount={20} />
      <View style={styles.buttonContainer}>
        <ModalBackButton style={styles.button} />
      </View>
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
  buttonContainer: {
    width: wp('10%'),
    height: hp('6%')
  },
  button: {
    width: wp('10%'),
    borderBottomWidth: 0
  },
  header: {
    marginLeft: wp('7%'),
    marginTop: hp('5%'),
    marginBottom: 0
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
