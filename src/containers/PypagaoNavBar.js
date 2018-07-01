import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PypagaoNavBarComponent from '../components/PypagaoNavBarComponent';
import {logout} from '../actions';

const PypagaoNavBar = ({loggedIn, handleLogout}) => (
  <PypagaoNavBarComponent loggedIn={loggedIn} handleLogout={handleLogout} />
);

PypagaoNavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  const {accessToken} = state.tokens;
  return {loggedIn: !!accessToken};
};

const mapDispatchToProps = dispatch => ({ handleLogout: () => dispatch(logout()) });

export default connect(mapStateToProps, mapDispatchToProps)(PypagaoNavBar);
