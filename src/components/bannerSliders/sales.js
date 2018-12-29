import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { iOSUIKit } from 'react-native-typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default class BannerSales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [
        {
          backgroundColor: '#ec407a',
          header: 'Xmas Special!',
          text: `Free delivery until NYE!`
        },
        {
          backgroundColor: '#29b6f6',
          header: 'Spring 2019!',
          text: `New 2019 collection is here!!`
        }
      ]
    };

    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item, index }) {
    return (
      <View style={[styles.container]}>
        <TouchableWithoutFeedback
          onPress={() => alert('There are no offers! I lied!!')}
        >
          <View>
            <SafeAreaView />

            <View style={styles.headerCenter}>
              <View
                style={[
                  { backgroundColor: item.backgroundColor },
                  styles.headerContainer
                ]}
              >
                <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
                  {item.header}
                </Text>
              </View>
            </View>

            <View style={styles.textContainer}>
              <Text style={[iOSUIKit.largeTitleEmphasized, styles.text]}>
                {item.text}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  render() {
    return (
      <Carousel
        data={this.state.banners}
        renderItem={this._renderItem}
        sliderWidth={wp('100%')}
        itemWidth={wp('100%')}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        loop={true}
        loopClonesPerSide={1}
        autoplay={true}
        lockScrollWhileSnapping={true}
        autoplayDelay={2}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: wp('20%')
  },
  headerCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer: {
    padding: hp('1%'),
    width: wp('70%')
  },
  header: {
    color: '#ffff00',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: hp('4%')
  },
  textContainer: {
    marginTop: hp('1%'),
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
    marginBottom: hp('1%'),
    backgroundColor: '#000'
  },
  text: {
    textAlign: 'center',
    fontSize: hp('3%'),
    color: '#fff'
  }
});
