/**
 * Realised by Ahmed Sbai
 * https://github.com/sbaiahmed1
 * @format
 * @flow strict-local
 */
import AUTH from './action-types';

const LOGIN = () => {
  return {
    type: AUTH.login,
  };
};
const LOGOUT = () => {
  return {
    type: AUTH.logout,
  };
};

export {LOGIN, LOGOUT};
