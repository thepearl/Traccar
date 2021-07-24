/**
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
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
  Pressable,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const CarsList = () => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [loginState, setLoginState] = useState<{
    email: string,
    password: string,
  }>({email: 'admin', password: 'admin'});
  const [carList, setCarList] = useState<Array<CarModel>>([]);
  const [deviceList, setDeviceList] = useState<Array<DeviceModel>>([]);

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
  useEffect(() => {
    getCarsList();
    getDevicesList();
  }, []);
  return (
    <BaseView isScrollView={false}>
      <View style={{flex: 1}}>
        <MapView
          style={{
            flex: 1,
          }}
          provider={PROVIDER_GOOGLE}>
          {carList.map((marker: CarModel, index) => (
            <Marker
              anchor={{x: 0.5, y: 0.5}}
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <FontAwesome5
                  style={{
                    paddingBottom: heightPercentageToDP(0.5),
                    color:
                      deviceList.filter(
                        device => device.id === marker.deviceId,
                      )?.[0]?.status === 'offline'
                        ? '#d11f1f'
                        : '#259f12',
                  }}
                  size={fontValue(25)}
                  name={'map-marker-alt'}
                />
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: heightPercentageToDP(2),
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '600',
                      textAlign: 'center',
                      minWidth: widthPercentageToDP(15),
                      fontSize: fontValue(10),
                      padding: widthPercentageToDP(2),
                    }}>
                    {
                      deviceList.filter(
                        device => device.id === marker.deviceId,
                      )?.[0]?.name
                    }
                  </Text>
                </View>
              </View>
            </Marker>
          ))}
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
          <View />
          <Pressable
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: heightPercentageToDP(5),
              width: heightPercentageToDP(5),

              borderRadius: heightPercentageToDP(1),
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
              name={'bell'}
            />
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            setIsExpanded(prevState => !prevState);
          }}
          style={{
            height: isExpanded
              ? heightPercentageToDP(40)
              : heightPercentageToDP(8),
            width: '90%',
            backgroundColor: 'white',
            bottom: heightPercentageToDP(4),
            position: 'absolute',
            borderRadius: heightPercentageToDP(2.5),
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
            // alignItems: 'center',
            paddingHorizontal: widthPercentageToDP(4),
            overflow: 'hidden',
          }}>
          <View
            style={{
              height: heightPercentageToDP(8),

              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: fontValue(12),
              }}>
              Liste des voitures
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '24%',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  color: '#A8A4A4',
                  fontSize: fontValue(11),
                  fontWeight: '700',
                }}>
                Voir tout
              </Text>
              <Ionicons
                style={{fontSize: fontValue(13)}}
                color={'#F86439'}
                name={isExpanded ? 'caret-down-outline' : 'caret-up-outline'}
              />
            </View>
          </View>
          {/*<Spacer height={heightPercentageToDP(1)} />*/}
          <View
            style={{
              height: 2,
              backgroundColor: '#707070',
              width: '100%',
              opacity: 0.12,
            }}
          />
          <Spacer height={heightPercentageToDP(2)} />
          {isExpanded && (
            <FlatList
              keyExtractor={item => item?.toString()}
              contentContainerStyle={{paddingBottom: heightPercentageToDP(3)}}
              data={carList}
              ItemSeparatorComponent={() => (
                <Spacer height={heightPercentageToDP(1)} />
              )}
              renderItem={({item}: CarModel) => {
                return (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      navigation.navigate('car-details', {
                        deviceObject: {
                          ...item,
                          ...deviceList.filter(
                            device => device.id === item?.deviceId,
                          )?.[0],
                        },
                      });
                    }}
                    style={{width: '80%'}}>
                    <View
                      style={{
                        backgroundColor: '#F2F2F2',
                        height: heightPercentageToDP(8),
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: 15,
                        paddingHorizontal: widthPercentageToDP(3),
                      }}>
                      <View
                        style={{
                          height: 25,
                          backgroundColor:
                            deviceList.filter(
                              device => device.id === item.deviceId,
                            )?.[0]?.status === 'offline'
                              ? '#d11f1f'
                              : '#259f12',
                          width: 25,
                          borderRadius: 13,
                        }}
                      />
                      <View
                        style={{
                          paddingHorizontal: widthPercentageToDP(5),
                          flexDirection: 'row',
                          alignItems: 'center',
                          width: '95%',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{flexDirection: 'column'}}>
                          <Text
                            style={{
                              fontSize: fontValue(11),
                              fontWeight: 'bold',
                            }}>
                            Honda Civic
                          </Text>
                          <Text
                            style={{
                              fontSize: fontValue(9),
                              color: '#9F9F9F',
                              fontWeight: '700',
                            }}>
                            {(item?.speed ? item.speed : '0') + ' km/h'}
                          </Text>
                          <Text
                            style={{
                              fontSize: fontValue(9),
                              color: '#9F9F9F',
                              fontWeight: '700',
                            }}>
                            {(item?.attributes?.totalDistance
                              ? item?.attributes?.totalDistance
                              : '0') + ' km'}
                          </Text>
                        </View>
                        <FontAwesome
                          size={fontValue(20)}
                          name={'long-arrow-right'}
                          style={{color: 'lightgray'}}
                        />
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                );
              }}
            />
          )}
        </Pressable>
        <Spacer style={{height: heightPercentageToDP(2)}} />
      </View>
    </BaseView>
  );
};

export default CarsList;

interface CarModel {
  accuracy: number;
  address: string;
  altitude: number;
  attributes: {
    batteryLevel: number,
    distance: number,
    motion: boolean,
    totalDistance: number,
  };

  course: number;
  deviceId: number;
  deviceTime: string;
  fixTime: string;
  id: number;
  latitude: number;
  longitude: number;
  network: string;
  outdated: boolean;
  protocol: string;
  serverTime: string;
  speed: number;
  type: any;
  valid: boolean;
}

interface DeviceModel {
  id: number;
  name: string;
  uniqueId: string;
  status: string;
  disabled: boolean;
  lastUpdate: string;
  positionId: number;
  groupId: number;
  phone: string;
  model: string;
  contact: string;
  category: string;
  geofenceIds: [];
  attributes: {};
}
