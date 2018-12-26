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
import { chooseNameCategory } from '../../../../store/actions/actions';
import Carousel from 'react-native-snap-carousel';
import { wpW, wpH } from '../../../../helpers/helpers';
import { iOSUIKit } from 'react-native-typography';

class ShoesSlider extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     activeSlide: 0
  //   };
  //   this._renderItem = this._renderItem.bind(this);
  // }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item, index }) {
    // if (index === this.state.activeSlide) {
    return (
      <View style={styles.slide}>
        <TouchableWithoutFeedback
          activeOpacity={0.6}
          onPress={() => this._handleNavigation(item.name)}
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
    // } else {
    // return (
    //   <View style={styles.slide}>
    //     <ImageBackground
    //       source={item.img}
    //       style={styles.img}
    //       resizeMode="cover"
    //     >
    //       <View style={styles.TextContainer}>
    //         <Text style={[iOSUIKit.subheadEmphasized, styles.name]}>
    //           {item.name.toUpperCase()}
    //         </Text>
    //       </View>
    //     </ImageBackground>
    //   </View>
    // );
  }

  _handleNavigation(name) {
    this.props.categoryName(name);
    this.props.navigation.navigate('Home');
  }

  // _onSnap(index) {
  //   this.setState({ activeSlide: index });
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
          SHOES
        </Text>
        <Carousel
          data={this.props.shoes}
          renderItem={this._renderItem}
          sliderWidth={wpW(100)}
          itemWidth={wpW(50)}
          inactiveSlideOpacity={1}
          enableSnap={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: wpH(5)
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
    shoes: state.uiReducer.manCategories.shoes
  };
};

const mapDispatchToProps = dispacth => {
  return {
    categoryName: name => dispacth(chooseNameCategory(name))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(ShoesSlider);

// this goes on carousel component
// onSnapToItem={index => this._onSnap(index)}