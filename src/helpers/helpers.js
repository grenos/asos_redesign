import { Platform, Dimensions } from 'react-native';

// get platform
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

// get viewport dimensions
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

export function wpW(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
export function wpH(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

//
const SCALE = 375; // constant, 375 is standard width of iphones 6 / 7 / 8 / 10
export const scaleFontSize = fontSize => {
  const ratio = fontSize / SCALE;
  const newSize = Math.round(ratio * viewportWidth);
  return newSize;
};

export const substring = [
  'boots',
  'Boot',
  'Boots',
  'boot',
  'loafers',
  'loafer',
  'slippers',
  'slipper',
  'sliders',
  'slider',
  'trainers',
  'trainer',
  'plimsolls',
  'football',
  'heels',
  'heeled',
  'shoes',
  'shoe'
];

export const deleteEuro = string => {
  const sliceEuro = string.replace(/€/g, '');
  return sliceEuro;
};

export const doMath = price => {
  const makeNumber = parseFloat(price);
  return makeNumber;
};

export const makeAddition = (x, y = null) => {
  const addition = x + y;
  return addition;
};
