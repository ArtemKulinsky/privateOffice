import React from 'react';
import './StudentsAddFields.scss'

const StudentsAddFields = () => {
  return (
    <div className="students__add-fields add-fields">
        <button className="add-fields__add-student add-field">Добавить ученика</button>
        <button className="add-fields__add-group add-field">Создать группу</button>
    </div>
  )
}

export default StudentsAddFields;