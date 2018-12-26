import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar
} from 'react-native';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { wpW, wpH } from '../../helpers/helpers';

import ClothesSlider from './productSliders/man/ClothesSlider';
import ShoesSlider from './productSliders/man/ShoesSlider';
import AccessoriesSlider from './productSliders/man/AccessoriesSlider';

const ManCategory = props => {
  return (
    <ScrollView>
      <StatusBar backgroundColor="#000" barStyle="dark-content" />

      <ClothesSlider />
      <ShoesSlider />
      <AccessoriesSlider />
    </ScrollView>
  );
};

export default ManCategory;
