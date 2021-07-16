/**
 * @format
 * @flow strict-local
 */
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={heightPercentageToDP(2)}>
        <StatusBar translucent backgroundColor={'transparent'} />
        <View>{children}</View>
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
