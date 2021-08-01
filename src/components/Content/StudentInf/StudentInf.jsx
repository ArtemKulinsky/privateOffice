import React from 'react';
import './StudentInf.scss'
import StudentInfHeader from './StudentInfHeader/StudentInfHeader';

const StudentInf = ({students}) => {
  return (
    <section
      className="main__student-inf student-inf"
    >
      <StudentInfHeader students={students}/>
      <div className="student-inf__body body">
        <div className="body__table table">
          <div className="table__column"></div>
          <div className="table__column"></div>
          <div className="table__exercises-count"></div>
          <div className="table__exercises-completed"></div>
          <div className="table__mistakes"></div>
          <div className="table__inaccuracies"></div>
          <div className="table__spent-time"></div>
          <div className="table__earned-terricoins"></div>
        </div>
      </div>
    </section>)
}

export default StudentInf
