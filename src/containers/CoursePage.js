import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Alert } from 'reactstrap';
import CourseChoice from '../components/CourseChoice';
import CourseModal from '../components/CourseModal';
import { createCourse, searchCourse } from '../actions';

class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseModalOpen: false,
      code: '',
      modalCode: ''
    };

    this.toggleCourseModal = this.toggleCourseModal.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalCodeChange = this.handleModalCodeChange.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
  }

  toggleCourseModal() {
    const { courseModalOpen } = this.state;
    this.setState({ courseModalOpen: !courseModalOpen });
  }

  handleCodeChange(event) {
    this.setState({ code: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { code } = this.state;
    const { dispatch } = this.props;
    dispatch(searchCourse({ codeToSearch: code }));
  }

  handleModalCodeChange(event) {
    this.setState({ modalCode: event.target.value });
  }

  handleModalSubmit(event) {
    event.preventDefault();
    const { modalCode } = this.state;
    const { dispatch } = this.props;
    this.setState({ courseModalOpen: false });
    dispatch(createCourse({ codeToCreate: modalCode }));
  }

  render() {
    const { courseModalOpen } = this.state;
    const { courseId, error } = this.props;
    return (
      <div>
        <Alert color="danger" className={error ? null : 'd-none'}>
          {error}
        </Alert>
        <CourseChoice
          course="CS1101S"
          onAdd={this.toggleCourseModal}
          onCodeChange={this.handleCodeChange}
          onSubmit={this.handleSubmit}
        />
        <CourseModal
          isOpen={courseModalOpen}
          toggle={this.toggleCourseModal}
          onCodeChange={this.handleModalCodeChange}
          onSubmit={this.handleModalSubmit}
        />
      </div>
    );
  }
}

CoursePage.propTypes = {
  courseId: PropTypes.number,
  error: PropTypes.string
};

CoursePage.defaultProps = {
  courseId: null,
  error: null
};

const mapStateToProps = state => {
  const { courseId } = state.selection;
  const { error } = state.course;
  return { courseId, error };
};

CoursePage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(CoursePage);
