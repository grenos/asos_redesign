import React, { Component } from 'react';
import SelectGender from '../../components/selectGender/SelectGender';

class GenderView extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <>
        <SelectGender />
      </>
    );
  }
}

export default GenderView;
