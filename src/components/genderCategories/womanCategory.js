import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import ClothesSlider from './productSliders/woman/ClothesSlider';
import ShoesSlider from './productSliders/woman/ShoesSlider';
import AccessoriesSlider from './productSliders/woman/AccessoriesSlider';

const WomanCategory = props => {
  return (
    <ScrollView>
      <StatusBar backgroundColor="#000" barStyle="dark-content" />

      <ClothesSlider />
      <ShoesSlider />
      <AccessoriesSlider />
    </ScrollView>
  );
};

export default WomanCategory;
