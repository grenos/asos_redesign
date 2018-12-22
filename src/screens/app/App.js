import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Asos Redesign project</Text>
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
    backgroundColor: '#ffffff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

// const mapStateToProps = state => {
//   return {
//     testProps: state.apiReducer.key
//   };
// };

// const mapDispatchToProps = dispacth => {
//   return {
//     selectItem: key => dispacth(testAction(key))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
