import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
// import { SearchBar } from 'react-native-elements';
import SearchBar from 'react-native-material-design-searchbar';
import { wpW } from '../../helpers/helpers';

export default class NavSearchBar extends Component {
  state = {
    input: ''
  };

  someMethod = () => {
    // alert('typed');
  };

  render() {
    return (
      <SearchBar
        onSearchChange={() => console.log('On Search Change')}
        height={30}
        iconColor="#000"
        inputStyle={styles.container}
        textStyle={styles.input}
        placeholder="SEARCH..."
        placeholderColor="#bdbdbd"
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginRight: wpW(5),
    marginLeft: wpW(5)
  },
  input: {
    fontSize: 14,
    color: '#000'
  }
});

// placeholder = 'SEARCH HERE';

{
  /* <SearchBar
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        showLoading={false}
        searchIcon={{ color: '#000' }}
        clearIcon={{ color: '#000' }}
        onChangeText={() => this.someMethod()}
        placeholderTextColor="#000"
      /> */
}
