import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PypagaoNavBarComponent from '../components/PypagaoNavBarComponent';
import {logout} from '../actions';

const PypagaoNavBar = ({name, loggedIn, handleLogout}) => (
  <PypagaoNavBarComponent name={name} loggedIn={loggedIn} handleLogout={handleLogout} />
);

PypagaoNavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  name: PropTypes.string
}

PypagaoNavBar.defaultProps = {
  name: null
}

const mapStateToProps = state => {
  const {accessToken} = state.tokens;
  const {name} = state.user;
  return {name, loggedIn: !!accessToken};
};

const mapDispatchToProps = dispatch => ({ handleLogout: () => dispatch(logout()) });

export default connect(mapStateToProps, mapDispatchToProps)(PypagaoNavBar);
