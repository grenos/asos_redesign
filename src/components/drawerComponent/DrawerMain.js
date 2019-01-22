import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

//!redux
import { connect } from 'react-redux';
import { compose } from 'redux';

import { DrawerItems, SafeAreaView, withNavigation } from 'react-navigation';
import images from '../../assets/img/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { iOSUIKit } from 'react-native-typography';

const CustomDrawerContentComponent = props => (
  <ScrollView stickyHeaderIndices={[0]}>
    <ImageBackground
      source={images.brand}
      style={styles.img}
      resizeMode="cover"
    >
      <View style={styles.imgTextContainer}>
        <Text style={[styles.text, { color: 'red' }]}>Hello Name</Text>
      </View>
    </ImageBackground>

    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      {/* <DrawerItems {...props} /> */}

      <TouchableOpacity onPress={() => props.navigation.navigate('GenderView')}>
        <View style={styles.buttonContainer}>
          <Icon style={styles.icon} name="ios-home" size={20} />
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => null}>
        <View style={styles.buttonContainer}>
          <Icon style={styles.icon} name="ios-person" size={20} />
          <Icon style={styles.icon} name="ios-power" size={20} />
          <Text style={styles.text}>Login/Logout</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => null}>
        <View style={styles.buttonContainer}>
          <Icon style={styles.icon} name="ios-cog" size={20} />
          <Text style={styles.text}>Setting</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => null}>
        <View style={styles.buttonContainer}>
          <Icon style={styles.icon} name="ios-cart" size={20} />
          <Text style={styles.text}>Cart</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => null}>
        <View style={styles.buttonContainer}>
          <Icon style={styles.icon} name="ios-heart" size={20} />
          <Text style={styles.text}>Favorites</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          alert('leads to faq page..probably not thought  because im bored')
        }
      >
        <View style={styles.buttonContainer}>
          <Icon style={styles.icon} name="ios-pizza" size={20} />
          <Text style={styles.text}>FAQ</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('sends to social media screen')}>
        <View style={styles.buttonContainer}>
          <Icon style={styles.icon} name="ios-people" size={26} />
          <Text style={styles.text}>Follow Us</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    // height: hp('100%'),
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    // margin: '8%'
  },
  imgTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: hp('2%')
  },
  img: {
    height: hp('25%')
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1.5%'),
    paddingVertical: hp('1%'),
    marginLeft: wp('4%')
  },
  text: {
    ...iOSUIKit.title3
  },
  icon: {
    marginRight: wp('3%')
  }
});

const mapStateToProps = state => {
  return {
    apiResult: state.apiReducer.apiResult,
    similarItems: state.apiReducer.similarItems
  };
};

const mapDispatchToProps = dispacth => {
  return {
    completeTheLook: () => dispacth(getSimilar())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(CustomDrawerContentComponent);
