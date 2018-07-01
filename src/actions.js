import fetch from 'cross-fetch';

const { REACT_APP_BACKEND_HOST, REACT_APP_BACKEND_PORT } = process.env;

const BACKEND = `http://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}`;

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const LOGOUT = 'LOGOUT';

export const requestLogin = () => ({ type: REQUEST_LOGIN });

export const receiveLogin = ({ accessToken, error }) => ({
  type: RECEIVE_LOGIN,
  accessToken,
  error
});

export const logout = () => ({
  type: LOGOUT
});

export const fetchToken = ({ email, password }) => {
  const payload = { email, password };
  return dispatch => {
    dispatch(requestLogin());
    fetch(`${BACKEND}/authentication/login`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        const { error, accessToken } = json;
        dispatch(receiveLogin({ accessToken, error }));
      });
  };
};
