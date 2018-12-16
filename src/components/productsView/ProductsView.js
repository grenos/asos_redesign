import React, { Component } from 'react';
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  StyleSheet
} from 'react-native';
import { wpH, wpW } from '../../helpers/helpers';

export default class ProductsView extends Component {
  state = {
    testData: [
      {
        key: 'a',
        img: 'http://unsplash.it/250/400?random&gravity=center',
        title: 'Random Title'
      },
      {
        key: 'b',
        img: 'http://unsplash.it/250/400?random&gravity=center',
        title: 'Random Title'
      },
      {
        key: 'c',
        img: 'http://unsplash.it/250/400?random&gravity=center',
        title: 'Random Title'
      },
      {
        key: 'd',
        img: 'http://unsplash.it/250/400?random&gravity=center',
        title: 'Random Title'
      },
      {
        key: 'e',
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
            <Text>{item.title}</Text>
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
            <Text>{item.title}</Text>
          </ImageBackground>
        </View>
      );
    }
  };

  render() {
    return (
      <FlatList
        data={this.state.testData}
        horizontal={false}
        numColumns={2}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  viewContainerEven: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: wpH(30),
    zIndex: 2
  },
  viewContainerOdd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: wpH(30)
  },
  imgStyleEven: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: wpW(10),
    paddingBottom: '5%',
    paddingRight: '5%'
  },
  imgStyleOdd: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: wpH(5),
    paddingBottom: '5%'
  }
});
