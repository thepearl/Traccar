/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../config/globals/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import {KeyboardType} from 'react-native';

const Input = ({
  withIcon,
  placeholder,
  iconName,
  value,
  onChangeText,
  error,
  secureTextEntry,
  keyboardType,
}: {
  withIcon?: boolean,
  placeholder?: string,
  iconName?: string,
  value?: string,
  onChangeText: (text?: string) => void,
  error?: string,
  secureTextEntry?: boolean,
  keyboardType?: KeyboardType,
}) => {
  const parseColor = () => {
    if (error?.length > 0) {
      return 'red';
    } else if (value?.length > 0) {
      return '#AF65D0';
    } else {
      return 'rgba(165,165,165,0.66)';
    }
  };
  return (
    <>
      <Pressable style={styles.container(parseColor)}>
        {withIcon && (
          <>
            <Ionicons
              style={styles.iconStyle(withIcon)}
              name={iconName}
              color={parseColor()}
            />
            <View style={styles.seperator(parseColor)} />
          </>
        )}
        <TextInput
          numberOfLines={1}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={'rgba(165,165,165,0.66)'}
          style={styles.input(withIcon)}
          autoCapitalize={'none'}
          keyboardType={keyboardType}
          importantForAutofill={'no'}
          secureTextEntry={secureTextEntry}
        />
      </Pressable>
      <Text
        style={{
          color: 'red',
          position: 'relative',
          width: '80%',
          alignSelf: 'center',
          paddingTop: heightPercentageToDP(0.25),
          paddingStart: widthPercentageToDP(5),
        }}>
        {error?.length > 0 && error}
      </Text>
    </>
  );
};
export default Input;
