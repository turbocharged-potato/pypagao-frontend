import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

import { selectCourse, findCourse, fetchSemesters } from '../actions';
import CourseChoice from '../components/CourseChoice';
import SemesterChoice from '../components/SemesterChoice';
import SemesterModal from '../components/SemesterModal';

class SemesterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      semesterModalOpen: false
    };
    const { dispatch } = this.props;
    const courseId = props.match.params.courseid
    dispatch(selectCourse({ id: courseId }));
    dispatch(findCourse({ id: courseId }));
    dispatch(fetchSemesters({ courseId }));

    this.handleChoose = this.handleChoose.bind(this);
    this.toggleSemesterModal = this.toggleSemesterModal.bind(this);
    this.handleModalStartYearChange = this.handleModalStartYearChange.bind(this);
    this.handleModalEndYearChange = this.handleModalEndYearChange.bind(this);
    this.handleModalNumberChange = this.handleModalNumberChange.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
  }

  handleChoose(event) {
    this.setState();
  }

  toggleSemesterModal() {
    const { semesterModalOpen } = this.state;
    console.log(semesterModalOpen);
    this.setState({ semesterModalOpen: !semesterModalOpen });
    console.log(semesterModalOpen);
  }

  handleModalStartYearChange() {

  }

  handleModalEndYearChange() {

  }

  handleModalNumberChange() {

  }

  handleModalSubmit() {

  }

  render() {
    const { semesterModalOpen } = this.state;
    const { semesters, courseError, courseCode } = this.props;
    console.log(semesters);
    return (
      <div>
        <Alert color="danger" className={courseError ? null : 'd-none'}>
          {courseError}
        </Alert>
        <CourseChoice
          disabled={true}
          course={courseCode}
        />
        <SemesterChoice
          onChoose={this.handleChoose}
          onAdd={this.toggleSemesterModal}
          semesters={semesters} />
        <SemesterModal
          isOpen={semesterModalOpen}
          toggle={this.toggleSemesterModal}
          onStartYearChange={this.handleModalStartYearChange}
          onEndYearChange={this.handleModalEndYearChange}
          onNumberChange={this.handleModalNumberChange}
          onSubmit={this.handleModalSubmit}
        />
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
  error: null
};

const mapStateToProps = state => {
  const { courseId, courseCode } = state.selection;
  const { courseError } = state.course;
  const { semesters } = state;
  return { courseId, courseCode, courseError, semesters };
}

export default connect(mapStateToProps)(SemesterPage);
