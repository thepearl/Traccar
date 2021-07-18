/**
 * Realised by Ahmed Sbai
 * https://github.com/sbaiahmed1
 * @format
 * @flow strict-local
 */
import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from '../../../screens';
import Tab from '../tabs';
import CarDetails from '../../../screens/carDetails/carDetails';

const StackNavigator = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name={'login'} component={Login} />
        <StackNavigator.Screen name={'car-list'} component={Tab} />
        <StackNavigator.Screen name={'car-details'} component={CarDetails} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};
export default Stack;
