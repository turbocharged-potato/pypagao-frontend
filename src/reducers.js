import { combineReducers } from 'redux';
import { RECEIVE_LOGIN } from './actions';

const tokens = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LOGIN:
      return { ...state, ...action.tokens };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ tokens });

export default rootReducer;
