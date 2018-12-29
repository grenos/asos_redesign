import React, { Component } from 'react';
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  StyleSheet
} from 'react-native';
import { wpH, wpW } from '../../helpers/helpers';
import { iOSUIKit } from 'react-native-typography';

export default class ProductsView extends Component {
  state = {
    testData: [
      {
        key: 'a',
        img: 'http://unsplash.it/180/200?gravity=center',
        title: 'Random Title'
      },
      {
        key: 'b',
        img: 'http://unsplash.it/180/200?gravity=center',
        title: 'Random Title'
      },
      {
        key: 'c',
        img: 'http://unsplash.it/180/200?gravity=center',
        title: 'Random Title'
      },
      {
        key: 'd',
        img: 'http://unsplash.it/180/200?gravity=center',
        title: 'Random Title'
      },
      {
        key: 'e',
        img: 'http://unsplash.it/180/200?gravity=center',
        title: 'Random Title'
      },
      {
        key: 'f',
        img: 'http://unsplash.it/180/200?gravity=center',
        title: 'Random Title'
      },
      {
        key: 'g',
        img: 'http://unsplash.it/250/400?random&gravity=center',
        title: 'Random Title'
      },
      {
        key: 'h',
        img: 'http://unsplash.it/250/400?random&gravity=center',
        title: 'Random Title'
      },
      {
        key: 'i',
        img: 'http://unsplash.it/250/400?random&gravity=center',
        title: 'Random Title'
      },
      {
        key: 'j',
        img: 'http://unsplash.it/250/400?random&gravity=center',
        title: 'Random Title'
      }
    ]
  };

  // apply diferent styles based on index
  _renderItem = ({ item, index }) => {
    if (index % 2 == 0) {
      //even 0 2 4 6 etc
      return (
        <View key={item.key} style={styles.viewContainerEven}>
          <ImageBackground
            source={{ uri: `${item.img}` }}
            style={styles.imgStyleEven}
          >
            {/* <Text style={iOSUIKit.title3Emphasized}>{item.title}</Text> */}
          </ImageBackground>
        </View>
      );
    } else {
      //odd 1 3 5 7 etc
      return (
        <View key={item.key} style={styles.viewContainerOdd}>
          <ImageBackground
            source={{ uri: `${item.img}` }}
            style={styles.imgStyleOdd}
          >
            {/* <Text style={iOSUIKit.title3Emphasized}>{item.title}</Text> */}
          </ImageBackground>
        </View>
      );
    }
  };

  _renderHeader = () => (
    <Text style={[iOSUIKit.largeTitleEmphasized, styles.header]}>
      OUR CATALOGUE
    </Text>
  );

  render() {
    return (
      <FlatList
        style={{ paddingTop: wpH(13) }}
        data={this.state.testData}
        horizontal={false}
        numColumns={2}
        ListHeaderComponent={this._renderHeader}
        stickyHeaderIndices={[0]}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: 'transparent',
    position: 'absolute',
    top: wpH(2),
    left: wpW(1)
  },
  viewContainerEven: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: wpH(40),
    zIndex: 2
  },
  viewContainerOdd: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: wpH(40)
  },
  imgStyleEven: {
    width: wpW(55),
    height: '100%',
    position: 'absolute',
    paddingTop: wpH(3),
    top: wpH(10),
    left: wpW(1)
  },
  imgStyleOdd: {
    width: wpW(55),
    height: '100%',
    position: 'absolute',
    paddingTop: wpH(3),
    right: wpW(1)
  }
});
