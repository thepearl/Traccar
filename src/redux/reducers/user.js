/**
 * Realised by Ahmed Sbai
 * https://github.com/sbaiahmed1
 * @format
 * @flow strict-local
 */
import AUTH from '../actions/auth/action-types';

const initialState = {
  user: {isLoggedIn: false},
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.login: {
      return {...state, user: {isLoggedIn: true, ...action?.payload}};
    }
    case AUTH.logout: {
      return {...state, user: {isLoggedIn: false}};
    }
    default: {
      return state;
    }
  }
};
export default Auth;
