/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ImageBackground, Pressable, Text, TouchableOpacity} from 'react-native';
import {svgButton} from '../../../assets/images';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../config/globals/styles';

const SvgButton = ({
  text,
  disabled,
  onPress,
}: {
  onPress?: () => void,
  text?: string,
  disabled?: boolean,
}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{width: widthPercentageToDP(50), alignSelf: 'center'}}
        disabled={disabled}
        onPress={onPress}>
        <ImageBackground
          resizeMode={'stretch'}
          style={{
            alignSelf: 'center',
            height: heightPercentageToDP(13.5),
            width: widthPercentageToDP(50),
            alignItems: 'center',
            justifyContent: 'center',
            opacity: disabled ? 0.7 : 1,
          }}
          source={svgButton}>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              fontSize: fontValue(14),
            }}>
            {text}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
};
export default SvgButton;
