import React from 'react';
import './Students.scss'
import StudentsAddFields from './StudentsAddFields/StudentsAddFields';
import StudentsSearch from './StudentsSearch/StudentsSearch';
import StudentsTabs from './StudentsTabs/StudentsTabs';
import StudentsTabsTypeSelection from './StudentsTabsTypeSelection/StudentsTabsTypeSelection';

const Students = ({students, tabsTypes, setLessons}) => {
  return (
    <section
      className="main__students students"
    >
      <h2 className="students__title">Мои ученики</h2>
      <StudentsTabsTypeSelection tabsTypes={tabsTypes} />
      <StudentsAddFields/>
      <StudentsSearch/>
      <StudentsTabs 
        students={students} 
        setLessons={setLessons}
      />
    </section>
  )
}

export default Students;