/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useState} from 'react';
import {BaseView} from '../../components/shared/base-view';
import {Spacer} from '../../components/shared/spacer';
import {fontValue, heightPercentageToDP} from '../../config/globals/styles';
import Input from '../../components/shared/input';
import SvgButton from '../../components/shared/svg-button/svg-button';
import {Text, View} from 'react-native';
import CardWithMapIcon from '../../components/login/card-with-map-icon';
import {StackActions, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {decode, encode} from 'base-64';
import {useDispatch} from 'react-redux';
import LOADING from '../../redux/actions/loading/action-types';
import {FINISH_LOADING, START_LOADING} from '../../redux/actions/loading';
import {LOGIN} from '../../redux/actions/auth';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const Login = () => {
  // State
  const [loginState, setLoginState] = useState<{
    email: string,
    password: string,
  }>({email: '', password: ''});
  // Redux
  const dispatch = useDispatch();
  // local variables
  const navigation = useNavigation();
  // Callbacks
  const handleTextChange = (text, name) => {
    setLoginState(prevState => {
      return {
        ...prevState,
        [name]: text,
      };
    });
  };
  //Axios
  function loginService() {
    dispatch(START_LOADING());
    axios({
      url: 'http://161.35.27.196:8082/api/devices',
      auth: {username: loginState.email, password: loginState.password},
    })
      .then(res => {
        console.log(res.data);
        dispatch(FINISH_LOADING());
        dispatch(LOGIN());
        navigation.dispatch(StackActions.replace('car-list'));
      })
      .catch(error => {
        console.log(error);
        dispatch(FINISH_LOADING());
        setTimeout(() => {
          alert('Veuillez vérifier vos coordonnées');
        }, 500);
      });
  }
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
      />
      <Spacer height={heightPercentageToDP(2)} />
      <Input
        value={loginState.password}
        onChangeText={text => handleTextChange(text, 'password')}
        iconName={'lock-closed'}
        secureTextEntry
        placeholder={'Password'}
        withIcon
      />
      <Spacer height={heightPercentageToDP(6)} />
      <SvgButton
        disabled={!loginState.email || !loginState.password}
        onPress={() => {
          loginService();
        }}
        text={'Se connecter'}
      />
    </BaseView>
  );
};

export default Login;
