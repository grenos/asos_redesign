import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { testAction } from '../../store/actions/actionIndex';

class App extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const key = '12345';

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Asos Redesign project</Text>
        <Button title="load" onPress={() => this.props.selectItem(key)} />
        <Button title="show" onPress={() => alert(this.props.testProps)} />
        <Button
          title="navigation"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

const mapStateToProps = state => {
  return {
    testProps: state.apiReducer.key
  };
};

const mapDispatchToProps = dispacth => {
  return {
    selectItem: key => dispacth(testAction(key))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
