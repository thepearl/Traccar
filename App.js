/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {BaseView, Spacer} from './src/components/shared';
import {heightPercentageToDP} from './src/config/globals/styles';
import Input from './src/components/shared/input';
import SvgButton from './src/components/shared/svg-button/svg-button';
const App = () => {
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
      <Input
        value={loginState.email}
        iconName={'person'}
        onChangeText={text => handleTextChange(text, 'email')}
        placeholder={'Email'}
        withIcon={true}
      />
      <Spacer height={heightPercentageToDP(2)} />
      <Input
        value={loginState.password}
        onChangeText={text => handleTextChange(text, 'password')}
        iconName={'lock-closed'}
        placeholder={'Password'}
        withIcon
      />
      <SvgButton disabled text={'Se connecter'} />
    </BaseView>
  );
};
export default App;
