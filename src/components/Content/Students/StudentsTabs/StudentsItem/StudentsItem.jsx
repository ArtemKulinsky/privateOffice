import React from 'react';
import './StudentsItem.scss'
import studentImg from './assets/mad-scientist_1.svg'

const StudentsItem = ({name}) => {
  return (
    <div className="tabs__tab tab">
      <div className="tab__img">
        <img src={studentImg} alt="" />
      </div>
      <div className="tab__name">{name}</div>
    </div>
  )
}

export default StudentsItem;