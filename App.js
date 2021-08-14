/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import Stack from './src/config/navigation/stack';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  /**************************************************/
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Stack />
        </PersistGate>
      </Provider>
    </>
  );
};
export default App;
