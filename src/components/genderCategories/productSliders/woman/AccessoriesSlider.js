import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import { wpW, wpH } from '../../../../helpers/helpers';
import { iOSUIKit } from 'react-native-typography';

class AccessoriesSlider extends Component {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <TouchableWithoutFeedback
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
        </TouchableWithoutFeedback>
      </View>
    );
  }

  _handleNavigation() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
          ACCESSORIES
        </Text>
        <Carousel
          data={this.props.accessories}
          renderItem={this._renderItem}
          sliderWidth={wpW(100)}
          itemWidth={wpW(50)}
          inactiveSlideOpacity={1}
          enableSnap={false}
          onSnapToItem={index => this._onSnap(index)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: wpH(5),
    marginBottom: 100
  },
  header: {
    position: 'absolute',
    zIndex: 3,
    top: -wpH(2)
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
    accessories: state.uiReducer.womanCategories.accessories
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
)(AccessoriesSlider);
