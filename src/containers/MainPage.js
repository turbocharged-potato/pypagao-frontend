import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CourseChoice from '../components/CourseChoice';
import CourseModal from '../components/CourseModal';
import SemesterChoice from '../components/SemesterChoice';
import SemesterModal from '../components/SemesterModal';
import PaperChoice from '../components/PaperChoice';
import PaperModal from '../components/PaperModal';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseModalOpen: false,
      semesterModalOpen: false,
      paperModalOpen: false
    };

    this.toggleCourseModal = this.toggleCourseModal.bind(this);
    this.toggleSemesterModal = this.toggleSemesterModal.bind(this);
    this.togglePaperModal = this.togglePaperModal.bind(this);
  }

  toggleCourseModal() {
    const { courseModalOpen } = this.state;
    this.setState({ courseModalOpen: !courseModalOpen });
  }

  toggleSemesterModal() {
    const { semesterModalOpen } = this.state;
    this.setState({ semesterModalOpen: !semesterModalOpen });
  }

  togglePaperModal() {
    const { paperModalOpen } = this.state;
    this.setState({ paperModalOpen: !paperModalOpen });
  }

  render() {
    const { courseId, semesterId, paperId } = this.props;
    if (!courseId) {
      return <Redirect to="/course" />;
    }
    if (!semesterId) {
      return <Redirect to="/semester" />;
    }
    if (!paperId) {
      return <Redirect to="/paper" />;
    }
    //    const {courseModalOpen, semesterModalOpen, paperModalOpen} = this.state;
    //    const semesters = [
    //      {
    //        start_year: 2017,
    //        end_year: 2018,
    //        number: 1,
    //      },
    //    ];
    //    const papers = [
    //      {name: 'Midterms'},
    //      {name: 'Midterms Reloaded'},
    //      {name: 'Finals'},
    //    ];
    //    return (
    //      <div>
    //        <CourseChoice course="CS1101S" onAdd={this.toggleCourseModal} disabled />
    //        <CourseModal isOpen={courseModalOpen} toggle={this.toggleCourseModal} />
    //        <hr />
    //        <SemesterChoice
    //          semesters={semesters}
    //          onAdd={this.toggleSemesterModal}
    //          disabled
    //        />
    //        <SemesterModal
    //          isOpen={semesterModalOpen}
    //          toggle={this.toggleSemesterModal}
    //        />
    //        <hr />
    //        <PaperChoice papers={papers} onAdd={this.togglePaperModal} />
    //        <PaperModal isOpen={paperModalOpen} toggle={this.togglePaperModal} />
    //      </div>
    //    );
  }
}

const mapStateToProps = state => {
  const { courseId, semesterId, paperId } = state.selection;
  return { courseId, semesterId, paperId };
};

export default connect(mapStateToProps)(MainPage);
