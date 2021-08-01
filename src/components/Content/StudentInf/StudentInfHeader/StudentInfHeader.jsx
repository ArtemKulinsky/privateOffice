import React from 'react';
import { useState } from 'react';
import './StudentInfHeader.scss'
import StudentInfTabs from './StudentInfTabs/StudentInfTab/StudentInfTabs';

const StudentInfHeader = ({students}) => {
  return (
    <div className="student-inf__header">
      <StudentInfTabs/>
      <div className="student-inf__tabs-selection tabs-selection">
        <select>
          {
            students.map(student => (
              <option
                className="tabs-selection__tab tab"
                id={student.id}
              >
                {/* <div className="tab__img">
                  <img src=""/>
                </div>
                <div className="tab__name"></div> */}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default StudentInfHeader
