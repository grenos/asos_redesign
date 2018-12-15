import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import NavSearchBar from './NavSearchBar';

const SearchContainer = props => {
  return <View>{props.toggler ? <NavSearchBar /> : null}</View>;
};

const mapStateToProps = state => {
  return {
    toggler: state.uiReducer.toggle
  };
};

export default connect(mapStateToProps)(SearchContainer);
