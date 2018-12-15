import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { wpW } from '../../helpers/helpers';

export default class NavSearchBar extends Component {
  state = {
    input: ''
  };

  someMethod = () => {
    alert('typed');
  };

  render() {
    return (
      <SearchBar
        containerStyle={styles.container}
        inputStyle={styles.input}
        noIcon={true}
        onChangeText={this.someMethod}
        placeholderTextColor="#000"
        placeholder="SEARCH HERE..."
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 10,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    alignItems: 'center'
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#fff',
    marginLeft: 0,
    marginRight: 0,
    width: wpW(87),
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 0,
    color: '#000',
    margin: 4,
    height: 19
  }
});
