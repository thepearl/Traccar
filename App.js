/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {BaseView, Spacer} from './src/components/shared';
import {heightPercentageToDP} from './src/config/globals/styles';
import Input from './src/components/shared/input';
import SvgButton from './src/components/shared/svg-button/svg-button';
const App = () => {
  return (
    <BaseView withSvgBackground>
      <Spacer height={heightPercentageToDP(10)} />
      <Input iconName={'person'} placeholder={'Email'} withIcon />
      <Spacer height={heightPercentageToDP(2)} />
      <Input iconName={'lock-closed'} placeholder={'Password'} withIcon />
      <SvgButton text={'Se connecter'} />
    </BaseView>
  );
};
export default App;
