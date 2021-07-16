/**
 * @format
 * @flow strict-local
 */

import {Dimensions, PixelRatio} from 'react-native';
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

export const fontValue = (fontSize, standardScreenHeight = 680) => {
  const heightPercent = (fontSize * screenHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};
export const widthPercentageToDP = widthPercent => {
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const heightPercentageToDP = heightPercent => {
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const vw = screenWidth / 100;
export const vh = screenHeight / 100;
