/**
 * Realised by Ahmed Sbai
 * https://github.com/sbaiahmed1
 * @format
 * @flow strict-local
 */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../globals/styles';
import CarsList from '../../../screens/carsList/carsList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
import {Spacer} from '../../../components/shared';
const Tabs = createBottomTabNavigator();

const Tab = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let imageName;
          if (route.name === 'blogs') {
            imageName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'search') {
            imageName = focused ? 'car-sport' : 'car-sport-outline';
          }
          // You can return any component that you like here!
          return (
            <>
              <Ionicons color={color} size={fontValue(15)} name={imageName} />
              <Spacer height={heightPercentageToDP(1)} />
              {focused &&
                route?.name !== 'searchss' &&
                route?.name !== 'searchs' && (
                  <View
                    style={{
                      height: heightPercentageToDP(0.75),
                      backgroundColor: '#B618FE',
                      width: widthPercentageToDP(6),
                      borderRadius: heightPercentageToDP(1),
                    }}
                  />
                )}
            </>
          );
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#B618FE',
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tabs.Screen
        options={{title: 'hello'}}
        name="blogs"
        component={CarsList}
      />
      <Tabs.Screen name="search" component={CarsList} />
    </Tabs.Navigator>
  );
};

export default Tab;
