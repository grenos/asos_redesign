import React from 'react';
import { View, ScrollView } from 'react-native';

import ProductHero from './ProductHero';
import ProductDetails from './ProductDetails';

const ProductView = () => {
  return (
    <ScrollView>
      <ProductHero />
      <ProductDetails />
    </ScrollView>
  );
};

export default ProductView;
