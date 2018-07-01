import React from 'react';
import CourseForm from '../components/CourseForm';
import SemesterForm from '../components/SemesterForm';
import PaperForm from '../components/PaperForm';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const semesters = [
      {
        start_year: 2017,
        end_year: 2018,
        number: 1,
      },
    ];
    const papers = [
      {name: 'Midterms'},
      {name: 'Midterms Reloaded'},
      {name: 'Finals'},
    ];
    return (
      <div>
        <CourseForm disabled course="CS1101S" />
        <hr />
        <SemesterForm disabled semesters={semesters} />
        <hr />
        <PaperForm papers={papers} />
      </div>
    );
  }
}

export default MainPage;
