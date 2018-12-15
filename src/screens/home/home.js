import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import SearchContainer from '../../components/searchBar/SearchContainer';
import { iOSUIKit } from 'react-native-typography';

export default class Home extends Component {
  //

  render() {
    return (
      <View>
        <SearchContainer />
        <ScrollView>
          <Text style={iOSUIKit.largeTitleEmphasized}>CATALOGUE</Text>
        </ScrollView>
      </View>
    );
  }
}
