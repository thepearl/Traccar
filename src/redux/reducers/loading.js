/**
 * Realised by Ahmed Sbai
 * https://github.com/sbaiahmed1
 * @format
 * @flow strict-local
 */
import LOADING from '../actions/loading/action-types';

const initialState = {
  loading: false,
  refreshing: false,
};

const Loading = (state = initialState, action) => {
  switch (action.type) {
    case LOADING.start: {
      return {...state, loading: true};
    }
    case LOADING.finish: {
      return {...state, loading: false};
    }
    default: {
      return state;
    }
  }
};
export default Loading;
