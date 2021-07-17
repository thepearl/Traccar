/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {BaseView, Spacer} from '../../components/shared';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../config/globals/styles';
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CarsList = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <BaseView>
      <MapView
        style={{
          height: heightPercentageToDP(100),
          width: widthPercentageToDP(100),
        }}
        provider={PROVIDER_GOOGLE}>
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
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            alignItems: 'center',
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
          {/*<View*/}
          {/*  style={{*/}
          {/*    height: 2,*/}
          {/*    backgroundColor: '#707070',*/}
          {/*    width: '100%',*/}
          {/*    opacity: 0.12,*/}
          {/*  }}*/}
          {/*/>*/}

          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={() => {
              return (
                <TouchableWithoutFeedback>
                  <Text>asdfasd </Text>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </Pressable>
        <Spacer style={{height: heightPercentageToDP(2)}} />
      </MapView>
    </BaseView>
  );
};

export default CarsList;
