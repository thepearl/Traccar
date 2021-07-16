/**
 * @format
 * @flow strict-local
 */
import {Pressable, TextInput, View} from 'react-native';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../config/globals/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Input = ({
  withIcon,
  placeholder,
  iconName,
}: {
  withIcon?: boolean,
  placeholder?: string,
  iconName?: string,
}) => {
  return (
    <Pressable
      style={{
        width: '80%',
        alignSelf: 'center',
        borderRadius: 25,
        borderColor: '#DEDEDE',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        paddingHorizontal: widthPercentageToDP(5),
        height: heightPercentageToDP(6),
      }}>
      {withIcon && (
        <>
          <Ionicons
            style={{
              fontSize: fontValue(17),
              width: '12%',
              paddingStart: withIcon ? 0 : '3%',
            }}
            name={iconName}
            color={'rgba(165,165,165,0.66)'}
          />
          <View
            style={{
              height: '40%',
              width: 1,
              backgroundColor: 'rgba(165,165,165,0.66)',
              marginEnd: '2%',
            }}
          />
        </>
      )}
      <TextInput
        numberOfLines={1}
        placeholder={placeholder}
        placeholderTextColor={'rgba(165,165,165,0.66)'}
        style={{
          color: 'rgba(165,165,165,1)',
          fontSize: fontValue(14),
          width: withIcon ? '85%' : '100%',
          paddingHorizontal: withIcon
            ? widthPercentageToDP(1)
            : widthPercentageToDP(5),
        }}
      />
    </Pressable>
  );
};
export default Input;
