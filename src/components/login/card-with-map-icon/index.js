/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {mapIndicatorCar, markerCar} from '../../../assets/images';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../config/globals/styles';

const CardWithMapIcon = () => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          backgroundColor: '#F8F8F8',
          height: heightPercentageToDP(32),
          width: '80%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 37,
        }}>
        <Image source={mapIndicatorCar} />
        <View
          style={{
            borderRadius: 2,
            backgroundColor: '#D38BF2',
            height: 4,
            width: widthPercentageToDP(6),
          }}
        />
        <Text
          style={{
            paddingTop: heightPercentageToDP(1),
            fontWeight: 'bold',
            fontSize: fontValue(15),
          }}>
          {' '}
          Tuni Track
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CardWithMapIcon;
