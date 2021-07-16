/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const Spacer = ({height}: {height?: number}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.spacerStyle(height)} />
  );
};
export default Spacer;
const styles = StyleSheet.create({
  spacerStyle: height => {
    return {height: height || 10, width: '100%'};
  },
});
