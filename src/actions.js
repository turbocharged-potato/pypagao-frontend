import fetch from 'cross-fetch';
import querystring from 'querystring';

const { REACT_APP_BACKEND_PROTOCOL, REACT_APP_BACKEND_HOST, REACT_APP_BACKEND_PORT } = process.env;

export const BACKEND = `${REACT_APP_BACKEND_PROTOCOL}://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}`;

const fetchAuthenticated = (url, opts = {}) => {
  // TODO: Add code to handle token expiry
  const accessToken = localStorage.getItem('accessToken');
  if (!opts.headers) {
    opts.headers = {};
  }
  Object.assign(opts.headers, {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  });
  console.log(opts);
  return fetch(url, opts);
};

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_REGISTER = 'RECEIVE_REGISTER';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_UNIVERSITY = 'RECEIVE_UNIVERSITY';
export const RECEIVE_SEARCH_COURSE = 'RECEIVE_SEARCH_COURSE';
export const RECEIVE_SEMESTERS = 'RECEIVE_SEMESTERS';
export const RECEIVE_PAPERS = 'RECEIVE_PAPERS';
export const SELECT_COURSE = 'SELECT_COURSE';
export const SELECT_SEMESTER = 'SELECT_SEMESTER';
export const SELECT_PAPER = 'SELECT_PAPER';

export const receiveLogin = ({ name, accessToken, error }) => ({
  type: RECEIVE_LOGIN,
  accessToken,
  error,
  name
});

export const receiveRegister = ({ success, error }) => ({
  type: RECEIVE_REGISTER,
  success,
  error
});

export const logout = () => ({
  type: LOGOUT
});

export const receiveUniversity = universities => ({
  type: RECEIVE_UNIVERSITY,
  universities
});

export const receiveSearchCourse = ({ id, code, error }) => ({
  type: RECEIVE_SEARCH_COURSE,
  id,
  code,
  error
});

export const receiveSemesters = ({ semesters }) => ({
  type: RECEIVE_SEMESTERS,
  semesters
});

export const receivePapers = ({ papers }) => ({
  type: RECEIVE_PAPERS,
  papers
});

export const selectCourse = ({ id }) => ({
  type: SELECT_COURSE,
  id
});

export const selectSemester = ({ id }) => ({
  type: SELECT_SEMESTER,
  id
});

export const selectPaper = ({ id }) => ({
  type: SELECT_PAPER,
  id
});

export const fetchToken = ({ email, password }) => {
  const payload = { email, password };
  return dispatch =>
    fetch(`${BACKEND}/authentication/login`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        const { name, error, accessToken } = json;
        dispatch(receiveLogin(error ? { error } : { accessToken, name }));
      });
};

export const postRegister = ({ name, universityId, email, password }) => dispatch => {
  const payload = { name, email, password, university_id: universityId };
  console.log(payload);
  fetch(`${BACKEND}/authentication/register`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async response => {
    if (response.status === 200) {
      dispatch(receiveRegister({ success: true, error: null }));
    } else {
      const { error } = await response.json();
      dispatch(receiveRegister({ error, success: false }));
    }
  });
};

export const fetchUniversities = () => dispatch =>
  fetch(`${BACKEND}/universities`)
    .then(response => response.json())
    .then(json => dispatch(receiveUniversity(json)));

export const searchCourse = ({ codeToSearch }) => dispatch => {
  const payload = querystring.stringify({ code: codeToSearch });
  fetchAuthenticated(`${BACKEND}/courses?${payload}`, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => {
      if (!json) {
        dispatch(receiveSearchCourse({ error: 'Not found' }));
        return;
      }
      const { id, code } = json;
      dispatch(selectCourse({ id }));
      dispatch(receiveSearchCourse({ id, code }));
    });
};

export const createCourse = ({ codeToCreate }) => dispatch => {
  const payload = { code: codeToCreate };
  fetchAuthenticated(`${BACKEND}/courses`, {
    method: 'POST',
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then(json => {
      const { error, id, code } = json;
      if (!error) {
        dispatch(selectCourse({ id }));
      }
      dispatch(receiveSearchCourse({ id, code, error }));
    });
};
