import React, { Component } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import NavSearchBar from './NavSearchBar';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: new Animated.Value(-80),
      toggler: this.props.toggler
    };
  }

  componentWillUpdate(nextState) {
    if (nextState.toggler == true && this.state.toggler == false) {
      //animate down
      this.toggleInputON();
    } else {
      //animate up
      this.toggleInputOFF();
    }
  }

  toggleInputON = () => {
    //animate down
    Animated.timing(this.state.slide, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  toggleInputOFF = () => {
    //animate up
    Animated.timing(this.state.slide, {
      toValue: -80,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  render() {
    let slideAnimation = {
      transform: [{ translateY: this.state.slide }]
    };
    return (
      <Animated.View style={[slideAnimation, styles.container]}>
        {/* {this.props.toggler ? <NavSearchBar /> : null} */}
        <NavSearchBar />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4c4c4c'
    // transform: [
    //   {
    //     translateY: -80
    //   }
    // ]
  }
});

const mapStateToProps = state => {
  return {
    toggler: state.uiReducer.toggle
  };
};

export default connect(mapStateToProps)(SearchContainer);
