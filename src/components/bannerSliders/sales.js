import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { wpH, wpW } from '../../helpers/helpers';
import { iOSUIKit } from 'react-native-typography';

export default class BannerSales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [
        {
          backgroundColor: '#ec407a',
          header: 'Xmas Special!!',
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
        sliderWidth={wpW(100)}
        itemWidth={wpW(100)}
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
    height: wpH(20)
  },
  headerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#c2185b',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0
  },
  headerContainer: {
    padding: 3,
    width: '70%'
  },
  header: {
    color: '#ffff00',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  textContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#000'
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: '#fff'
  }
});
