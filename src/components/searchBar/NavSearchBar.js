import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { searchInput } from '../../store/actions/actions';
import SearchBar from 'react-native-material-design-searchbar';
import { wpW } from '../../helpers/helpers';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';
class NavSearchBar extends Component {
  state = {
    input: ''
  };

  _onSubmit = input => {
    this.props.inputData(input);
    this.props.navigation.navigate('Home');
  };

  render() {
    //
    const { input } = this.state;

    return (
      <SearchBar
        onSearchChange={data => this.setState({ input: data })}
        onSubmitEditing={() => this._onSubmit(input)}
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

const mapDispatchToProps = dispacth => {
  return {
    inputData: data => dispacth(searchInput(data))
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withNavigation
)(NavSearchBar);
