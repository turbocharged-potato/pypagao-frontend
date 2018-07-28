import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AppRedirector = ({ loggedIn, courseId, semesterId, paperId }) => {
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }
  if (!courseId) {
    return <Redirect to="/course" />;
  }
  if (!semesterId) {
    return <Redirect to={`/semester/${courseId}`} />;
  }
  if (!paperId) {
    return <Redirect to="/paper" />;
  }
  return null;
};

const mapStateToProps = state => {
  const { courseId, semesterId, paperId } = state.selection;
  const { accessToken } = state.tokens;
  return { courseId, semesterId, paperId, loggedIn: !!accessToken };
};

AppRedirector.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  courseId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  semesterId: PropTypes.string,
  paperId: PropTypes.number
};

AppRedirector.defaultProps = {
  courseId: null,
  semesterId: null,
  paperId: null
};

export default connect(mapStateToProps)(AppRedirector);
