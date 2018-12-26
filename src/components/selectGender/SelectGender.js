import React from 'react';
import {
  TouchableHighlight,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { chooseGenderCategory } from '../../store/actions/actions';
import { withNavigation } from 'react-navigation';
import { wpW, wpH } from '../../helpers/helpers';
import { iOSUIKit } from 'react-native-typography';
import { scaleFontSize } from '../../helpers/helpers';

const SelectGender = props => {
  const { genders } = props;

  const handleNavigation = id => {
    if (id === 'woman') {
      // send id of selected gender to apireducer here
      props.chooseGender(id);
    } else {
      // send id to apireducer here
      props.chooseGender(id);
    }
    props.navigation.navigate('SelectCategory');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      {genders.map(item => {
        return (
          <TouchableHighlight
            onPress={() => handleNavigation(item.id)}
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
          </TouchableHighlight>
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

const mapDispatchToProps = dispacth => {
  return {
    chooseGender: id => dispacth(chooseGenderCategory(id))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(SelectGender);
