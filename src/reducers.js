import { combineReducers } from 'redux';
import {
  RECEIVE_LOGIN,
  LOGOUT,
  RECEIVE_UNIVERSITY,
  RECEIVE_REGISTER,
  RECEIVE_SEARCH_COURSE,
  RECEIVE_SEMESTERS,
  RECEIVE_PAPERS,
  SELECT_COURSE,
  SELECT_SEMESTER,
  SELECT_PAPER
} from './actions';

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

const selection = (state = {}, action) => {
  const newState = {};
  switch (action.type) {
    case SELECT_COURSE: {
      const { id, code } = action;
      Object.assign(newState, { courseId: id, courseCode: code });
      break;
    }
    case SELECT_SEMESTER: {
      const { id } = action;
      Object.assign(newState, { semesterId: id });
      break;
    }
    case SELECT_PAPER: {
      const { id } = action;
      Object.assign(newState, { paperId: id });
      break;
    }
    default:
      return state;
  }
  return { ...state, ...newState };
};

const course = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_COURSE: {
      const { id, code, error } = action;
      const newState = { id, code, error };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};

const semesters = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SEMESTERS: {
      const newState = action.semesters;
      return newState;
    }
    default:
      return state;
  }
};

const papers = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PAPERS: {
      const newState = action.papers;
      return newState;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tokens,
  universities,
  register,
  user,
  selection,
  course,
  semesters,
  papers
});

export default rootReducer;
