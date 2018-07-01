import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import MainPage from './MainPage';

const App = ({loggedIn}) => (
  <div>
    {loggedIn ? null : <Redirect to="/login" />}
    <MainPage />
  </div>
);

const mapStateToProps = state => {
  const {accessToken} = state.tokens;
  return {loggedIn: !!accessToken};
};

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
