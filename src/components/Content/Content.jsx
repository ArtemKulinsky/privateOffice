import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setExercises, setLessons, setStudents } from '../../Redux/privateOffice-reducer';
import './Content.scss'
import StudentInf from './StudentInf/StudentInf';
import Students from './Students/Students';

const Content = ({students, tabsTypes, studentInfTabs, setStudents, setLessons, setExercises}) => {
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
          setExercises={setExercises}
        />
        <StudentInf 
          students={students}
          studentInfTabs={studentInfTabs}
        />
      </main>
  );
}

let mapStateToProps = (state) => {
  return {
    students: state.privateOffice.students,
    tabsTypes: state.privateOffice.tabsTypes,
  }
};

export default compose(
  connect(mapStateToProps, {
    setStudents,
    setLessons,
    setExercises,
  }),
)(Content);
