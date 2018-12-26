import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import { wpW, wpH } from '../../helpers/helpers';
import images from '../../assets/img/index';
import { iOSUIKit } from 'react-native-typography';
import { scaleFontSize } from '../../helpers/helpers';

export default class BrandSelector extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
            BRANDS
          </Text>
          <TouchableWithoutFeedback
            onPress={() => alert('will lead to brand directory')}
          >
            <ImageBackground
              source={images.brand}
              style={styles.img}
              resizeMode="cover"
            />
          </TouchableWithoutFeedback>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: wpH(30),
    justifyContent: 'flex-end'
  },
  img: {
    width: wpW(100),
    height: wpH(28)
  },
  header: {
    fontSize: scaleFontSize(55),
    lineHeight: 100,
    position: 'absolute',
    zIndex: 2,
    top: -wpH(4)
  }
});
