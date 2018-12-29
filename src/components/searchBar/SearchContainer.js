import React, { Component } from 'react';
import { Animated, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import NavSearchBar from './NavSearchBar';
import { toggleStateFalse } from '../../store/actions/UiActions';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: new Animated.Value(0),
      toggler: this.props.toggler
    };
  }

  // componentWillUpdate(nextState) {
  //   if (nextState.toggler == true && this.state.toggler == false) {
  //     //animate down
  //     this._toggleInputON();
  //   } else {
  //     //animate up
  //     this._toggleInputOFF();
  //   }
  // }

  // _toggleInputON = () => {
  //   //animate down
  //   Animated.timing(this.state.slide, {
  //     toValue: 0,
  //     duration: 300,
  //     useNativeDriver: true
  //   }).start();
  // };

  // _toggleInputOFF = () => {
  //   //animate up
  //   Animated.timing(this.state.slide, {
  //     toValue: wpW(100),
  //     duration: 300,
  //     useNativeDriver: true
  //   }).start();
  // };

  // set toggle state to false
  // so if component re-mounts
  // state will re-start from false
  // componentWillUnmount() {
  //   this.props.toggleOff();
  // }

  render() {
    let slideAnimation = {
      transform: [{ translateX: this.state.slide }]
    };
    return (
      <Animated.View style={[slideAnimation]}>
        <NavSearchBar />
      </Animated.View>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggler: state.uiReducer.toggle
  };
};

const mapDispatchToProps = dispacth => {
  return {
    toggleOff: () => dispacth(toggleStateFalse())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
