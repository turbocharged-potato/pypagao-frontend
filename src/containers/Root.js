import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/:page?" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = PropTypes.shape({
  store: PropTypes.shape({}).isRequired,
}).isRequired;

export default Root;
