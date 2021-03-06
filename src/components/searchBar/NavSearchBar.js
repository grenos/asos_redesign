import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  searchInput,
  searchProducts,
  clearStateCategory,
  clearStateOffset,
  clearStateApiResults,
  clearBrands
} from '../../store/actions/ApiActions';
import SearchBar from 'react-native-material-design-searchbar';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import validate from 'validate.js';

class NavSearchBar extends Component {
  state = {
    input: ''
  };

  _onSubmit = input => {
    let searchLenght = this.state.input.length;

    if (searchLenght < 3) {
      alert('too small');
    } else {
      this.props.inputData(input);
      this.props.clearCategory();
      this.props.clearBrands();
      this.props.clearOffset();
      this.props.searchProducts();
      this.props.clearApiResults();
      this.props.navigation.navigate('Products');
    }
  };

  render() {
    //
    const { input } = this.state;

    return (
      <View>
        <SearchBar
          onSearchChange={data => this.setState({ input: data })}
          onSubmitEditing={() => this._onSubmit(input)}
          height={40}
          iconColor="#000"
          inputStyle={styles.container}
          textStyle={styles.input}
          placeholderColor="#000"
        />
      </View>
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
    marginRight: wp('5%'),
    marginLeft: wp('5%')
  },
  input: {
    fontSize: 16,
    color: '#000'
  }
});

const mapStateToProps = state => {
  return {
    inputData: state.apiReducer.searchInput
  };
};

const mapDispatchToProps = dispacth => {
  return {
    inputData: data => dispacth(searchInput(data)),
    searchProducts: () => dispacth(searchProducts()),
    clearCategory: () => dispacth(clearStateCategory()),
    clearOffset: () => dispacth(clearStateOffset()),
    clearApiResults: () => dispacth(clearStateApiResults()),
    clearBrands: () => dispacth(clearBrands())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(NavSearchBar);
