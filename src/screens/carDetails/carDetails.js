/**
 * @format
 * @flow strict-local
 */
import React, {useCallback, useRef, useState} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {BaseView, Spacer} from '../../components/shared';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Marker} from 'react-native-maps';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../config/globals/styles';
import {
  FlatList,
  Image,
  Linking,
  Platform,
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import type {CarModel, DeviceModel} from '../carsList/carsList';

const CarDetails = ({route}) => {
  const device = route?.params?.deviceObject;
  const navigation = useNavigation();
  const [loginState, setLoginState] = useState<{
    email: string,
    password: string,
  }>({email: 'admin', password: 'admin'});
  const [carList, setCarList] = useState<Array<CarModel>>([]);
  const [deviceList, setDeviceList] = useState<Array<DeviceModel>>([]);
  const timeout = useRef();
  //Axios
  function getCarsList() {
    axios({
      url: 'http://161.35.27.196:8082/api/positions',
      auth: {username: loginState.email, password: loginState.password},
      headers: {},
    })
      .then(res => {
        console.log(res.data);
        setCarList(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function getDevicesList() {
    axios({
      url: 'http://161.35.27.196:8082/api/devices',
      auth: {username: loginState.email, password: loginState.password},
      headers: {},
    })
      .then(res => {
        console.log(res.data);
        setDeviceList(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  useFocusEffect(
    useCallback(() => {
      getCarsList();
      getDevicesList();
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      timeout.current = setInterval(() => {
        getCarsList();
        getDevicesList();
      }, 10000);

      return () => {
        clearTimeout(timeout.current);
      };
    }, []),
  );
  return (
    <BaseView isScrollView={false}>
      <View style={{flex: 1}}>
        <MapView
          initialRegion={{
            longitude: device?.longitude,
            latitude: device?.latitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          style={{
            flex: 1,
            minHeight: heightPercentageToDP(100) + StatusBar.currentHeight,
          }}
          provider={PROVIDER_GOOGLE}>
          {carList.map(car => {
            console.log('device', device);
            console.log(car);
            if (car.deviceId === device.id) {
              return (
                <Marker
                  anchor={{x: 0.5, y: 0.5}}
                  coordinate={{
                    longitude: device.longitude,
                    latitude: device.latitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                  }}>
                  <FontAwesome5
                    style={{
                      color:
                        device.status === 'offline' ? '#d11f1f' : '#259f12',
                    }}
                    size={fontValue(25)}
                    name={'map-marker-alt'}
                  />
                </Marker>
              );
            }
          })}
        </MapView>
        <View
          style={{
            width: '90%',
            top: heightPercentageToDP(10),
            position: 'absolute',
            alignSelf: 'center',
            paddingHorizontal: widthPercentageToDP(4),
            alignContent: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Pressable
            onPress={navigation.goBack}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: heightPercentageToDP(5),
              width: heightPercentageToDP(5),
              left: widthPercentageToDP(1),
              borderRadius: heightPercentageToDP(1.5),
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}>
            <Ionicons
              style={{
                fontSize: fontValue(20),
              }}
              name={'ios-chevron-back'}
            />
          </Pressable>
          <View style={{flexDirection: 'row'}}>
            <Pressable
              style={{
                marginHorizontal: widthPercentageToDP(5),
                alignItems: 'center',
                justifyContent: 'center',
                height: heightPercentageToDP(5),
                width: heightPercentageToDP(5),
                borderRadius: heightPercentageToDP(1.5),
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 5,

                elevation: 6,
              }}>
              <FontAwesome
                style={{
                  fontSize: fontValue(18),
                }}
                name={'gear'}
              />
            </Pressable>
            <Pressable
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: heightPercentageToDP(5),
                width: heightPercentageToDP(5),
                borderRadius: heightPercentageToDP(1.5),
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                left: widthPercentageToDP(5),
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
              }}>
              <FontAwesome5
                style={{
                  fontSize: fontValue(18),
                }}
                name={'bell'}
              />
            </Pressable>
          </View>
        </View>
        <Spacer style={{height: heightPercentageToDP(8)}} />
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            top: heightPercentageToDP(20),
            width: '80%',
            height: heightPercentageToDP(10),
          }}>
          <Pressable
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: heightPercentageToDP(5),
              width: heightPercentageToDP(5),
              borderRadius: heightPercentageToDP(1.5),
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}>
            <FontAwesome5
              style={{
                fontSize: fontValue(18),
              }}
              name={'map-marker-alt'}
            />
          </Pressable>
        </View>
        <Spacer style={{height: heightPercentageToDP(8)}} />
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            top: heightPercentageToDP(28),
            width: '80%',
            height: heightPercentageToDP(10),
          }}>
          <Pressable
            onPress={() => {
              const scheme = Platform.select({
                ios: 'maps:0,0?q=',
                android: 'geo:0,0?q=',
              });
              const latLng = `${device.latitude},${device.longitude}`;
              const label = device.name;
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`,
              });
              Linking.openURL(url);
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: heightPercentageToDP(5),
              width: heightPercentageToDP(5),
              borderRadius: heightPercentageToDP(1.5),
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}>
            <MaterialIcon
              style={{
                fontSize: fontValue(18),
              }}
              name={'ship-wheel'}
            />
          </Pressable>
        </View>
        <View
          style={{
            position: 'absolute',
            height: heightPercentageToDP(20),
            backgroundColor: 'white',
            bottom: heightPercentageToDP(7),
            width: '95%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              opacity: 0.5,
              paddingHorizontal: widthPercentageToDP(3),
              paddingTop: heightPercentageToDP(1),
              fontSize: fontValue(14),
            }}>
            {device.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              paddingVertical: heightPercentageToDP(1),
              bottom: heightPercentageToDP(0),
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              width: '100%',
              backgroundColor: 'white',
              elevation: 5,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              paddingHorizontal: widthPercentageToDP(5),
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: fontValue(14),
              }}>
              Historiques
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: fontValue(14),
              }}>
              Rapport.
            </Text>
            <Text
              style={{
                fontWeight: '600',
                color: '#F70B0B',
                fontSize: fontValue(14),
              }}>
              Arr??ter moteur
            </Text>
          </View>
        </View>
      </View>
    </BaseView>
  );
};

export default CarDetails;
