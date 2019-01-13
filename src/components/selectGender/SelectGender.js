import React from 'react';
import {
  TouchableWithoutFeedback,
  ImageBackground,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { chooseGenderCategory } from '../../store/actions/ApiActions';
import { withNavigation } from 'react-navigation';
import { iOSUIKit } from 'react-native-typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const SelectGender = props => {
  const { genders } = props;

  const handleNavigation = id => {
    if (id === 'women') {
      // send id of selected gender to apiReducer here
      props.chooseGender(id);
    } else {
      // send id to apiReducer here
      props.chooseGender(id);
    }
    props.navigation.navigate('SelectCategory');
  };

  return (
    <View style={styles.container}>
      {genders.map(item => {
        return (
          <TouchableWithoutFeedback
            onPress={() => handleNavigation(item.id)}
            key={item.id}
          >
            <View style={styles.centerImages}>
              <ImageBackground
                source={item.img}
                style={styles.img}
                resizeMode="cover"
              >
                <View style={styles.textContainer}>
                  <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
                    {item.gender.toUpperCase()}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp('55%'),
    justifyContent: 'flex-start'
  },
  centerImages: {
    // center images verticaly
    height: hp('27.5%')
  },
  img: {
    width: wp('100%'),
    height: hp('26%')
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    color: '#fff',
    lineHeight: 100,
    fontSize: hp('5%')
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
