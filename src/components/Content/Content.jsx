import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import { setExercises, setLessons, setStudents } from '../../Redux/privateOffice-reducer';
import './Content.scss'
import StudentInf from './StudentInf/StudentInf';
import Students from './Students/Students';

const Content = ({students, lessons, tabsTypes, studentInfTabs, setStudents, setLessons, setExercises}) => {
  if(students.length === 0) {
    setStudents();
  }

  return (
      <main
        id="content-wrapper"
        className="main"
      >
        <Students 
          students={students} 
          tabsTypes={tabsTypes}
          setStudents={setStudents}
          setLessons={setLessons}
        />
        <Route path="/student" 
          render={ () => (
            <StudentInf 
            students={students}
            lessons={lessons}
            studentInfTabs={studentInfTabs}
            />
        )} 
        />
        {/* <StudentInf 
          students={students}
          lessons={lessons}
          studentInfTabs={studentInfTabs}
        /> */}
      </main>
  );
}

let mapStateToProps = (state) => {
  return {
    students: state.privateOffice.students,
    tabsTypes: state.privateOffice.tabsTypes,
    lessons: state.privateOffice.lessons,
  }
};

export default compose(
  connect(mapStateToProps, {
    setStudents,
    setLessons,
    setExercises,
  }),
)(Content);
