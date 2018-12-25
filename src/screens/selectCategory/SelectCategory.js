import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
// import 2 components here
// woman and man categories
import WomanCategory from '../../components/genderCategories/womanCategory';
// get clicked id from store
// and based on that print one of the compoents

// also here use a navbar

class SelectCategory extends Component {
  render() {
    return (
      <View>
        <SafeAreaView />
        <WomanCategory />
      </View>
    );
  }
}

export default SelectCategory;
