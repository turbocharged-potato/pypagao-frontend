import fetch from 'cross-fetch';

const { REACT_APP_BACKEND_PROTOCOL, REACT_APP_BACKEND_HOST, REACT_APP_BACKEND_PORT } = process.env;

export const BACKEND = `${REACT_APP_BACKEND_PROTOCOL}://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}`;

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_REGISTER = 'RECEIVE_REGISTER';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_UNIVERSITY = 'RECEIVE_UNIVERSITY';

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

export const postRegister = ({ name, universityId, email, password }) => {
  const payload = { name, email, password, university_id: universityId };
  console.log(payload);
  return dispatch =>
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
