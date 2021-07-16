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
}: {
  children: Node,
  withSvgBackground?: boolean,
}) => {
  return (
    <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        enabled={true}
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <StatusBar translucent backgroundColor={'transparent'} />
        <View style={{flex: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            fadingEdgeLength={100}
            style={{flex: 1}}>
            {children}
          </ScrollView>
        </View>
        {withSvgBackground && (
          <Image
            source={svgBackground}
            style={{
              position: 'absolute',
              zIndex: -1,
              resizeMode: 'cover',
              height: heightPercentageToDP(100),
              width: widthPercentageToDP(100),
            }}
          />
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default BaseView;
