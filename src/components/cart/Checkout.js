import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { iOSUIKit } from 'react-native-typography';

export default class Checkout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: €{this.props.total}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CHECK OUT</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp('15%'),
    borderTopWidth: 1,
    borderColor: '#f5f5f5'
  },
  totalContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: hp('1,3%'),
    marginRight: wp('10%')
  },
  totalText: { ...iOSUIKit.bodyEmphasized },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%')
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: hp('1.5%'),
    width: wp('80%')
  },
  buttonText: {
    ...iOSUIKit.bodyEmphasized,
    color: '#fff',
    textAlign: 'center'
  }
});
