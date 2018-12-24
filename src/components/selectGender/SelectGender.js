import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { wpW, wpH } from '../../helpers/helpers';
import { iOSUIKit } from 'react-native-typography';
import { scaleFontSize } from '../../helpers/helpers';
const SelectGender = props => {
  const { genders } = props;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      {genders.map(item => {
        return (
          <TouchableOpacity
            onPress={() => null}
            key={item.id}
            activeOpacity={0.7}
          >
            <ImageBackground source={item.img} style={styles.img}>
              <View style={styles.textContainer}>
                <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
                  {item.gender.toUpperCase()}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  img: {
    width: wpW(100),
    height: wpH(50)
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    color: '#fff',
    lineHeight: 100,
    fontSize: scaleFontSize(55),
    left: wpW(1),
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});

// see if need uri on state for img
const mapStateToProps = state => {
  return {
    genders: state.uiReducer.genders
  };
};

// const mapDispatchToProps = dispacth => {
//   return {
//     selectItem: key => dispacth(testAction(key))
//   };
// };

export default connect(mapStateToProps)(SelectGender);
