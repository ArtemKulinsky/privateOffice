import React from 'react';
import './StudentsItem.scss'
import studentImg from './assets/mad-scientist_1.svg'
import { NavLink } from 'react-router-dom';

const StudentsItem = ({name, itemId, setLessons}) => {
  let onItemClick = () => {
    setLessons(itemId);
  }

  return (
    <NavLink 
      to={"/student"}
      onClick={() => onItemClick()}
    >
      <div className="tabs__tab tab">
        <div className="tab__img">
          <img src={studentImg} alt="" />
        </div>
        <div className="tab__name">{name}</div>
      </div>
    </NavLink>
  )
}

export default StudentsItem;