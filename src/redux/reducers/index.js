/**
 * Realised by Ahmed Sbai
 * https://github.com/sbaiahmed1
 * @format
 * @flow strict-local
 */
import {combineReducers} from 'redux';
import Loading from './loading';
import Auth from './user';

const RootReducer = combineReducers({
  loading: Loading,
  auth: Auth,
});
export default RootReducer;
