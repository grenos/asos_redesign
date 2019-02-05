import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

//!redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import { chooseGenderCategory } from '../../store/actions/ApiActions';

import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { iOSUIKit } from 'react-native-typography';
import images from '../../assets/img/index';

const GenderSelector = props => {
  const handleNavigation = id => {
    if (id === 'women') {
      // send id of selected gender to apiReducer here
      props.chooseGender(id);
    } else {
      // send id to apiReducer here
      props.chooseGender(id);
    }
  };

  let genderBG = null;
  if (props.genderSelected === 'women') {
    genderBG = (
      <ImageBackground
        source={images.woman}
        style={[styles.img, styles.genderContainer]}
        resizeMode="cover"
      >
        <Text style={[styles.textWhite]}>
          {props.genderSelected.toUpperCase()}
        </Text>
      </ImageBackground>
    );
  }

  if (props.genderSelected === 'men') {
    genderBG = (
      <ImageBackground
        source={images.man}
        style={[styles.img, styles.genderContainer]}
        resizeMode="cover"
      >
        <Text style={[styles.textWhite]}>
          {props.genderSelected.toUpperCase()}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.genderContainer,
          { borderRightWidth: 1, borderRightColor: '#f5f5f5' }
        ]}
        onPress={() => handleNavigation(props.genders[0].id)}
      >
        {props.genderSelected === 'women' ? (
          genderBG
        ) : (
          <Text style={[styles.text]}>WOMAN</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.genderContainer}
        onPress={() => handleNavigation(props.genders[1].id)}
      >
        {props.genderSelected === 'men' ? (
          genderBG
        ) : (
          <Text style={[styles.text]}>MAN</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('7%'),
    borderWidth: 1,
    borderColor: '#F5F5F5',
    borderLeftWidth: 0
  },
  genderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    ...iOSUIKit.title3,
    color: '#000'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  textWhite: {
    ...iOSUIKit.title3,
    color: '#fff'
  }
});

const mapStateToProps = state => {
  return {
    genders: state.uiReducer.genders,
    genderSelected: state.apiReducer.chooseGender
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
)(GenderSelector);
