import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import { wpW, wpH } from '../../../helpers/helpers';
import { iOSUIKit } from 'react-native-typography';

class ClothesSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0
    };
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item, index }) {
    if (index === this.state.activeSlide) {
      return (
        <View style={styles.slide}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => this._handleNavigation()}
          >
            <ImageBackground
              source={item.img}
              style={styles.img}
              resizeMode="cover"
            >
              <View style={styles.TextContainer}>
                <Text style={[iOSUIKit.subheadEmphasized, styles.name]}>
                  {item.name.toUpperCase()}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.slide}>
          <ImageBackground
            source={item.img}
            style={styles.img}
            resizeMode="cover"
          >
            <View style={styles.TextContainer}>
              <Text style={[iOSUIKit.subheadEmphasized, styles.name]}>
                {item.name.toUpperCase()}
              </Text>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }

  _handleNavigation() {
    this.props.navigation.navigate('Home');
  }

  _onSnap(index) {
    this.setState({ activeSlide: index });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
          CLOTHES
        </Text>
        <Carousel
          data={this.props.clothing}
          renderItem={this._renderItem}
          sliderWidth={wpW(100)}
          itemWidth={wpW(50)}
          inactiveSlideOpacity={0.4}
          onSnapToItem={index => this._onSnap(index)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: wpH(8)
  },
  header: {
    marginBottom: wpH(1),
    marginLeft: wpW(2)
  },
  slide: {},
  name: {
    fontSize: 20
  },
  img: {
    width: wpW(50),
    height: wpH(30)
  },
  TextContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: -20
  }
});

const mapStateToProps = state => {
  return {
    clothing: state.uiReducer.womanCategories.clothing
  };
};

// const mapDispatchToProps = dispacth => {
//   return {
//     selectItem: key => dispacth(testAction(key))
//   };
// };

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withNavigation
)(ClothesSlider);
