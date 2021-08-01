import React from 'react';
import './StudentTable.scss';

const StudentTable = ({lessons}) => {

  let tablesColumnsNames = [
    '№',
    `Название урока`,
    'Упражнений в уроке',
    'Упражнений выполнено',
    'Ошибок',
    'Неточности',
    'Потраченное время',
    'Заработано террикоинов',
  ]

  return (
    <div className="student-inf__body">
      <div className="body__table table">
      <div className="table__header header">
        {
          tablesColumnsNames.map((item, id)=> (
            <div 
              className="header__item"
              // key={id}
            >{item}</div>
            
          ))
        }
      </div>
      <div className="table__body body">
        {
          lessons.map(lesson => (
            <div  className="body__row row">
              <div className="row__item">{lesson.id + 1}</div>
              <div className="row__item">{lesson.name}</div>
              <div className="row__item">{lesson.amountOfExercises}</div>
              <div className="row__item">{lesson.amountOfDoneExercises}</div>
              <div className="row__item">{lesson.amountOfMistakes}</div>
              <div className="row__item">{lesson.amountOfInaccuracies}</div>
              <div className="row__item">{lesson.spentTime}</div>
              <div className="row__item">{lesson.earnedTerricoins}</div>
            </div>
          ))
        }
        
      </div>
    </div>
    </div>
  )
}

export default StudentTable
