/**
 * Realised by Ahmed Sbai
 * https://github.com/sbaiahmed1
 * @format
 * @flow strict-local
 */
import LOADING from './action-types';

const START_LOADING = () => {
  return {
    type: LOADING.start,
  };
};
const FINISH_LOADING = () => {
  return {
    type: LOADING.finish,
  };
};

export {START_LOADING, FINISH_LOADING};
