import React from 'react';
import { useState } from 'react';
import './StudentInfHeader.scss'
import StudentInfTabs from './StudentInfTabs/StudentInfTab/StudentInfTabs';

const StudentInfHeader = ({students}) => {
  return (
    <div className="student-inf__header">
      <StudentInfTabs/>
      <div className="student-inf__tabs-selection tabs-selection"></div>
    </div>
  )
}

export default StudentInfHeader
