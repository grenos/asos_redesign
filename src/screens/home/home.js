import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SearchContainer from '../../components/searchBar/SearchContainer';

export default class Home extends Component {
  //

  render() {
    return (
      <View>
        <SearchContainer />
        <Text>Hello other page!</Text>
      </View>
    );
  }
}
