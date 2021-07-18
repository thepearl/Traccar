/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
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
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CarDetails = () => {
  const [markers, setMarkers] = useState<
    Array<{
      latLong: {latitude: string, longitude: string},
      title: string,
      desc: string,
    }>,
  >([
    {
      latLong: {latitude: 35.766545, longitude: 10.801833},
      title: 'Monastir',
      desc: 'centre ville',
    },
    {
      latLong: {latitude: 35.766545, longitude: 10.5},
      title: 'Sousse centre ville',
      desc: 'Jammel',
    },
  ]);

  return (
    <BaseView>
      <MapView
        initialRegion={{
          latitude: 35.766545,
          longitude: 10.801833,
          longitudeDelta: 1,
          latitudeDelta: 1,
        }} //35.394305,9.535017
        style={{
          position: 'absolute',
          height: heightPercentageToDP(100),
          width: widthPercentageToDP(100),
        }}
        provider={PROVIDER_GOOGLE}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latLong}
            title={marker.title}
            description={marker.description}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <FontAwesome5
                style={{color: '#d11f1f'}}
                size={fontValue(25)}
                name={'map-marker-alt'}
              />
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: heightPercentageToDP(2),
                  margin: heightPercentageToDP(1.5),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                    fontSize: fontValue(10),
                    padding: widthPercentageToDP(2),
                  }}>
                  {marker.title}
                </Text>
              </View>
            </View>
          </Marker>
        ))}
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
            <MaterialIcon
              style={{
                fontSize: fontValue(18),
              }}
              name={'ship-wheel'}
            />
          </Pressable>
        </View>
      </MapView>
    </BaseView>
  );
};

export default CarDetails;
