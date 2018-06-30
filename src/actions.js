import fetch from 'cross-fetch';

const { REACT_APP_BACKEND_HOST, REACT_APP_BACKEND_PORT } = process.env;

const BACKEND = `http://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}`;

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';

export const receiveLogin = ({ tokens, error }) => ({
  type: RECEIVE_LOGIN,
  tokens,
  error
});

export const fetchToken = ({ email, password }) => {
  const payload = { email, password };
  return dispatch => {
    console.log(process.env);
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
        dispatch(receiveLogin(error ? { error } : { tokens: { accessToken } }));
      });
  };
};
