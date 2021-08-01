import React from 'react';
import { useState } from 'react';
import './StudentInfTab.scss'

const StudentInfTab = ({name, id, activeTab, setActiveTab}) => {
  let isActive = (id === activeTab); 

  return(
    <div 
      className={
        isActive 
          ? "tabs_tab tab active"
          : "tabs_tab tab"
      }
    >
      <p 
        className="tab__name"
        onClick={() => setActiveTab(id)}
      >{name}</p>
    </div>
  )
}

export default StudentInfTab;
