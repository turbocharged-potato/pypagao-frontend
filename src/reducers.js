import { combineReducers } from 'redux';
import { RECEIVE_LOGIN, LOGOUT } from './actions';

const tokens = (state = { accessToken: localStorage.getItem('accessToken') }, action) => {
  const newState = {};
  switch (action.type) {
    case RECEIVE_LOGIN: {
      const { error, accessToken } = action;
      Object.assign(newState, { error, accessToken });
      localStorage.setItem('accessToken', accessToken);
      break;
    }
    case LOGOUT:
      Object.assign(newState, { error: null, accessToken: null });
      localStorage.removeItem('accessToken');
      break;
    default:
      return state;
  }
  return { ...state, ...newState };
};

const rootReducer = combineReducers({ tokens });

export default rootReducer;
