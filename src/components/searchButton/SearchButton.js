import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { wpW } from '../../helpers/helpers';
import { withNavigation } from 'react-navigation';

const SearchButton = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('SearchProductModal')}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>SEARCH</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  buttonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 2,
    marginRight: wpW(7)
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});

// const mapDispatchToProps = dispacth => {
//   return {
//     toggler: () => dispacth(toggleState())
//   };
// };

// export default compose(
//   mapDispatchToProps,
//   withNavigation
// )(SearchButton);

export default withNavigation(SearchButton);
