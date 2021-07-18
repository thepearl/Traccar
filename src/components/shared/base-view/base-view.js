/**
 * @format
 * @flow strict-local
 */
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../config/globals/styles';
import React from 'react';
import {svgBackground} from '../../../assets/images';

const BaseView = ({
  children,
  withSvgBackground,
  isScrollView,
}: {
  children: Node,
  withSvgBackground?: boolean,
  isScrollView?: boolean,
}) => {
  return (
    <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        enabled={true}
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <StatusBar translucent backgroundColor={'transparent'} />
        <View style={{flex: 1}}>
          {isScrollView ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              bounces={false}
              fadingEdgeLength={100}
              style={{flex: 1}}>
              {children}
            </ScrollView>
          ) : (
            <View style={{flex: 1}} bounces={false} fadingEdgeLength={100}>
              {children}
            </View>
          )}
        </View>
        {withSvgBackground && (
          <Image
            source={svgBackground}
            style={{
              position: 'absolute',
              zIndex: -1,
              resizeMode: 'stretch',
              height:
                Platform.OS === 'android'
                  ? heightPercentageToDP(100) + StatusBar.currentHeight
                  : heightPercentageToDP(100),
              width: widthPercentageToDP(100),
            }}
          />
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default BaseView;
