import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CoursePage from './CoursePage';
import SemesterPage from './SemesterPage';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={null} />
      <Route exact path="/course" component={CoursePage} />
      <Route path="/semester/:courseid" component={SemesterPage} />
    </Switch>
  </div>
);

export default App;
