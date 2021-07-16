/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useState} from 'react';
import {BaseView} from '../../components/shared/base-view';
import {Spacer} from '../../components/shared/spacer';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../config/globals/styles';
import Input from '../../components/shared/input';
import SvgButton from '../../components/shared/svg-button/svg-button';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {mapIndicatorCar} from '../../assets/images';
import CardWithMapIcon from '../../components/login/card-with-map-icon';

const Login = () => {
  // State
  const [loginState, setLoginState] = useState<{
    email: string,
    password: string,
  }>({email: '', password: ''});
  // Redux
  // local variables
  // Callbacks
  const handleTextChange = (text, name) => {
    setLoginState(prevState => {
      return {
        ...prevState,
        [name]: text,
      };
    });
  };
  /**************************************************/
  return (
    <BaseView withSvgBackground>
      <Spacer height={heightPercentageToDP(10)} />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: fontValue(25),
          textAlign: 'center',
          paddingBottom: heightPercentageToDP(1),
        }}>
        Bienvenue
      </Text>
      <Text
        style={{
          fontSize: fontValue(16),
          color: '#989898',
          textAlign: 'center',
          paddingBottom: heightPercentageToDP(2),
        }}>
        sécurisez et tracez efficacement
      </Text>
      <CardWithMapIcon />
      <Spacer height={heightPercentageToDP(2)} />
      <View
        style={{
          backgroundColor: '#707070',
          height: 2,
          width: '70%',
          alignSelf: 'center',
          opacity: 0.13,
        }}
      />
      <Spacer height={heightPercentageToDP(2.5)} />
      <Input
        value={loginState.email}
        iconName={'person'}
        onChangeText={text => handleTextChange(text, 'email')}
        placeholder={'Email'}
        withIcon
        // error={'sqdqs'}
      />
      <Spacer height={heightPercentageToDP(2)} />
      <Input
        value={loginState.password}
        onChangeText={text => handleTextChange(text, 'password')}
        iconName={'lock-closed'}
        placeholder={'Password'}
        withIcon
      />
      <Spacer height={heightPercentageToDP(6)} />
      <SvgButton text={'Se connecter'} />
    </BaseView>
  );
};

export default Login;
