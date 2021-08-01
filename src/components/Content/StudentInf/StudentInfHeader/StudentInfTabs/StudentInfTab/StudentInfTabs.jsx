import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import StudentInfTab from '../StudentInfTab';
import './StudentInfTabs.scss'

const StudentInfTabs = ({}) => {
  let [activeTab, setActiveTab] = useState(1)

  return (
    <div className="student-inf__tabs tabs">
      <StudentInfTab 
        name={'Расписание'}
        id={0}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <StudentInfTab
        name={'Успеваемость'}
        id={1}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  )
}

export default StudentInfTabs;
