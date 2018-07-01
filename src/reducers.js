import { combineReducers } from 'redux';
import { RECEIVE_LOGIN, LOGOUT, RECEIVE_UNIVERSITY, RECEIVE_REGISTER } from './actions';

const tokens = (state = { accessToken: localStorage.getItem('accessToken') }, action) => {
  const newState = {};
  switch (action.type) {
    case RECEIVE_LOGIN: {
      const { error, accessToken } = action;
      if (error) {
        Object.assign(newState, { error });
      } else {
        Object.assign(newState, { accessToken });
        localStorage.setItem('accessToken', accessToken);
      }
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

const universities = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_UNIVERSITY:
      return action.universities;
    default:
      return state;
  }
};

const register = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REGISTER: {
      const { success, error } = action;
      const newState = { success, error };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};

const user = (state = { name: localStorage.getItem('name') }, action) => {
  const newState = {};
  switch (action.type) {
    case RECEIVE_LOGIN: {
      const { name } = action;
      if (name) {
        Object.assign(newState, { name });
        localStorage.setItem('name', name);
      }
      break;
    }
    case LOGOUT:
      Object.assign(newState, { name: null });
      localStorage.removeItem('name');
      break;
    default:
      return state;
  }
  return { ...state, ...newState };
};

const rootReducer = combineReducers({ tokens, universities, register, user });

export default rootReducer;
