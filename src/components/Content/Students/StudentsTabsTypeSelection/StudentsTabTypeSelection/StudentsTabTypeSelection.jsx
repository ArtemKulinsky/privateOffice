import React from 'react';
import './StudentsTabTypeSelection.scss'

const StudentsTabTypeSelection = ({text, id, idActiveItem, setActiveItem}) => {
  let isActive = (id === idActiveItem);

  return (
    <h3
      className={
        isActive 
        ? "tabs-type-selection__item active" 
        : "tabs-type-selection__item"
      }
      onClick={() => setActiveItem(id)}
    >{text}</h3>
  )
}

export default StudentsTabTypeSelection;