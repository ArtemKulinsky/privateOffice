import React from 'react';
import './StudentTable.scss';

const StudentTable = ({lessons, setLessons}) => {
  // setLessons();
  // let lessons = [
  //     { id: 0, name: 'Урок 1', amountOfExercises: '100', amountOfDoneExercises: '90', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
  //     { id: 1, name: 'Урок 2', amountOfExercises: '30', amountOfDoneExercises: '25', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
  //     { id: 2, name: 'Урок 3', amountOfExercises: '70', amountOfDoneExercises: '70', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
  //     { id: 3, name: 'Урок 4', amountOfExercises: '20', amountOfDoneExercises: '10', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
  //     { id: 3, name: 'Урок 5', amountOfExercises: '33', amountOfDoneExercises: '27', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
  //     { id: 4, name: 'Урок 6', amountOfExercises: '23', amountOfDoneExercises: '19', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
  //     { id: 5, name: 'Урок 7', amountOfExercises: '55', amountOfDoneExercises: '50', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
  //     { id: 6, name: 'Урок 8', amountOfExercises: '95', amountOfDoneExercises: '10', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
  //     { id: 7, name: 'Урок 9', amountOfExercises: '55', amountOfDoneExercises: '50', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
  //     { id: 8, name: 'Урок 10', amountOfExercises: '95', amountOfDoneExercises: '10', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
  // ]

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
