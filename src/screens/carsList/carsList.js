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
import {useNavigation} from '@react-navigation/native';

const CarsList = () => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
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
    <BaseView isScrollView={false}>
      <View style={{flex: 1}}>
        <MapView
          initialRegion={{
            latitude: 35.766545,
            longitude: 10.801833,
            longitudeDelta: 1,
            latitudeDelta: 1,
          }} //35.394305,9.535017
          style={{
            flex: 1,
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
            <Ionicons
              style={{
                fontSize: fontValue(20),
              }}
              name={'ios-chevron-back'}
            />
          </Pressable>
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
                name={isExpanded ? 'caret-up-outline' : 'caret-down-outline'}
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
              data={[1, 2, 3, 4, 5]}
              ItemSeparatorComponent={() => (
                <Spacer height={heightPercentageToDP(1)} />
              )}
              renderItem={() => {
                return (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      navigation.navigate('car-details');
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
                          backgroundColor: '#d11f1f', // green #259f12
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
                            0km/h
                          </Text>
                          <Text
                            style={{
                              fontSize: fontValue(9),
                              color: '#9F9F9F',
                              fontWeight: '700',
                            }}>
                            0km
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
