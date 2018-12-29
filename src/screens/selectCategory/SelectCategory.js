import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';

import WomanCategory from '../../components/genderCategories/womanCategory';
import ManCategory from '../../components/genderCategories/manCategory';

class SelectCategory extends Component {
  render() {
    return (
      <View>
        <SafeAreaView />
        {this.props.genders == 'women' ? <WomanCategory /> : <ManCategory />}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    genders: state.apiReducer.chooseGender
  };
};

// const mapDispatchToProps = dispacth => {
//   return {
//     chooseGender: id => dispacth(chooseGenderCategory(id))
//   };
// };

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withNavigation
)(SelectCategory);
