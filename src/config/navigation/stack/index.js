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
import {ReactNativeModal} from 'react-native-modal';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

const StackNavigator = createNativeStackNavigator();

const Stack = () => {
  const {loading} = useSelector(state => state?.loading);
  const {user} = useSelector(state => state?.auth);
  console.log(loading);
  return (
    <NavigationContainer>
      <ReactNativeModal
        backdropOpacity={0.5}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        isVisible={loading}>
        <ActivityIndicator color={'#AF65D0'} size={'large'} />
      </ReactNativeModal>
      <StackNavigator.Navigator
        initialRouteName={user?.isLoggedIn ? 'car-list' : 'login'}
        screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name={'login'} component={Login} />
        <StackNavigator.Screen name={'car-list'} component={Tab} />
        <StackNavigator.Screen name={'car-details'} component={CarDetails} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};
export default Stack;
