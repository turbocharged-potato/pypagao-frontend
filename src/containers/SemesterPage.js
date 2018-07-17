import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

import { selectCourse } from '../actions';

class SemesterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      semesterModalOpen: false,
    };
    const { dispatch } = this.props;
    dispatch(selectCourse({ id: props.match.params.courseid }));
  }

  handleChoose(event) {
    this.setState();
  }

  render() {
    const {error} = this.props;
    return (
      <div>
        <Alert color="danger" className={error ? null : 'd-none'}>
          {error}
        </Alert>
      </div>
    );
  }
}

SemesterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      courseid: PropTypes.string.isRequired
    })
  }).isRequired
};

SemesterPage.defaultProps = {
  error: null,
}

export default connect()(SemesterPage);
