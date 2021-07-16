/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ImageBackground, Text} from 'react-native';
import {svgButton} from '../../../assets/images';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../config/globals/styles';

const SvgButton = ({text}: {text?: string}) => {
  return (
    <ImageBackground
      resizeMode={'stretch'}
      style={{
        alignSelf: 'center',
        height: heightPercentageToDP(14),
        width: widthPercentageToDP(50),
        alignItems: 'center',
        justifyContent: 'center',
      }}
      source={svgButton}>
      <Text
        style={{color: 'white', fontWeight: '600', fontSize: fontValue(14)}}>
        {text}
      </Text>
    </ImageBackground>
  );
};
export default SvgButton;
