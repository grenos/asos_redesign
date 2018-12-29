import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import images from '../../assets/img/index';
import { iOSUIKit } from 'react-native-typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default class BrandSelector extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => alert('will lead to brand directory')}
        >
          <ImageBackground
            source={images.brand}
            style={styles.img}
            resizeMode="cover"
          >
            <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
              BRANDS
            </Text>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp('30%'),
    justifyContent: 'flex-end'
  },
  img: {
    width: wp('100%'),
    height: hp('28%')
  },
  header: {
    fontSize: hp('7%'),
    lineHeight: hp('7%'),
    marginTop: -hp('2.5%'),
    zIndex: 2
  }
});
