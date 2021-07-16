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

const Input = ({
  withIcon,
  placeholder,
  iconName,
  value,
  onChangeText,
  error,
}: {
  withIcon?: boolean,
  placeholder?: string,
  iconName?: string,
  value?: string,
  onChangeText: (text?: string) => void,
  error?: string,
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

const styles = StyleSheet.create({
  container: parseColor => {
    return {
      width: '80%',
      alignSelf: 'center',
      borderRadius: 25,
      borderColor: parseColor(),
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
      paddingHorizontal: widthPercentageToDP(5),
      height: heightPercentageToDP(6),
    };
  },
  seperator: parseColor => {
    return {
      height: '40%',
      width: 1,
      backgroundColor: parseColor(),
      marginEnd: '2%',
    };
  },
  iconStyle: (withIcon: boolean) => {
    return {
      fontSize: fontValue(17),
      width: '12%',
      paddingStart: withIcon ? 0 : '3%',
    };
  },
  input: (withIcon: boolean) => {
    return {
      color: 'black',
      fontSize: fontValue(14),
      width: withIcon ? '85%' : '100%',
      paddingHorizontal: withIcon
        ? widthPercentageToDP(1)
        : widthPercentageToDP(5),
    };
  },
});
