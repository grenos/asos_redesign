import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { chooseSize } from '../../store/actions/UiActions';

import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { iOSUIKit } from 'react-native-typography';

import Blur from '../blur/BlurComponent';
import Icon from 'react-native-vector-icons/Ionicons';

class ProductSizes extends Component {
  //
  onSizeSelect = size => {
    // call action
    this.props.sizeSelection(size);

    setTimeout(() => {
      this.props.navigation.goBack();
    }, 500);
  };

  render() {
    //find if category is shoes or clothes and display right sizes
    const isSize = this.props.sizes;
    const isShoeSize = this.props.shoeSizes;
    const { isShoeSelected } = this.props;

    let renderSizes = null;
    if (isShoeSelected) {
      renderSizes = isShoeSize;
    } else {
      renderSizes = isSize;
    }

    return (
      <View>
        <View style={styles.topView}>
          <Blur />
          <View style={styles.textContainer}>
            <Text style={styles.text}>PICK YOUR SIZE</Text>
          </View>
          <View style={styles.backButton}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="ios-arrow-round-back" size={38} style={styles.icon} />
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={styles.bottomView}>
          <ScrollView>
            {renderSizes.map(size => {
              return (
                <TouchableOpacity
                  key={size}
                  onPress={() => this.onSizeSelect(size)}
                >
                  <View
                    style={
                      this.props.isSizeSelected &&
                      this.props.isSizeSelected === size
                        ? styles.sizeViewSel
                        : styles.sizeViewUn
                    }
                  >
                    <Text
                      style={
                        this.props.isSizeSelected &&
                        this.props.isSizeSelected === size
                          ? styles.sizesSel
                          : styles.sizesUn
                      }
                    >
                      {size.toUpperCase()}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  topView: {
    height: hp('50%')
  },
  textContainer: {
    height: hp('50%'),
    position: 'absolute',
    top: hp('14%'),
    left: 0
  },
  text: {
    ...iOSUIKit.largeTitleEmphasized,
    fontSize: wp('28%'),
    paddingTop: hp('4%'),
    lineHeight: wp('20.5%')
  },
  bottomView: {
    backgroundColor: '#fff',
    height: hp('50%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingBottom: 20
  },
  sizeViewUn: {
    width: wp('100%'),
    paddingVertical: hp('3%')
  },
  sizeViewSel: {
    paddingVertical: hp('3%')
  },
  sizesUn: {
    ...iOSUIKit.title3,
    paddingLeft: wp('7%')
  },
  sizesSel: {
    ...iOSUIKit.title3,
    color: '#1b5e20',
    paddingLeft: wp('7%')
  },
  backButton: {
    position: 'absolute',
    top: hp('7%'),
    left: wp('7%')
  }
});

const mapStateToProps = state => {
  return {
    sizes: state.uiReducer.isSize,
    isSizeSelected: state.uiReducer.sizeChosen,
    shoeSizes: state.uiReducer.isShoeSize,
    isShoeSelected: state.uiReducer.isShoe
  };
};

const mapDispatchToProps = dispacth => {
  return {
    sizeSelection: size => dispacth(chooseSize(size))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(ProductSizes);
