import React from 'react';
import { useState } from 'react';

const StudentLessons = ({}) => {
  let lessons = [
      { id: '0', name: 'Урок 1', amountOfExercises: '100', amountOfDoneExercises: '90', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
      { id: '1', name: 'Урок 2', amountOfExercises: '30', amountOfDoneExercises: '25', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
      { id: '2', name: 'Урок 3', amountOfExercises: '70', amountOfDoneExercises: '70', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
      { id: '3', name: 'Урок 4', amountOfExercises: '20', amountOfDoneExercises: '10', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
      { id: '3', name: 'Урок 5', amountOfExercises: '33', amountOfDoneExercises: '27', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
      { id: '4', name: 'Урок 6', amountOfExercises: '23', amountOfDoneExercises: '19', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
      { id: '5', name: 'Урок 7', amountOfExercises: '55', amountOfDoneExercises: '50', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
      { id: '6', name: 'Урок 8', amountOfExercises: '95', amountOfDoneExercises: '10', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
      { id: '7', name: 'Урок 9', amountOfExercises: '55', amountOfDoneExercises: '50', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
      { id: '8', name: 'Урок 10', amountOfExercises: '95', amountOfDoneExercises: '10', amountOfMistakes: '19', amountOfInaccuracies: '33', spentTime: '100', earnedTerricoins: '1000' },
  ]

  let tablesColumnsNames = [
    '№',
    'Название урока',
    'Упражнений в уроке',
    'Упражнений выполнено',
    'Ошибок',
    'Неточности',
    'Потрfчаенное время',
    'Заработано террикоинов',
  ]

  return (
    <div className="body__table table">
      {
        tablesColumnsNames.map((item, id) => (
          <div className="table__column column">
            <div className="column__title"></div>
            <div className="column__body">
              
            </div>
          </div>
        ))
      }

      {/* <div className="table__column"></div>
      <div className="table__exercises-count"></div>
      <div className="table__exercises-completed"></div>
      <div className="table__mistakes"></div>
      <div className="table__inaccuracies"></div>
      <div className="table__spent-time"></div>
      <div className="table__earned-terricoins"></div> */}
    </div>
  )
}

export default StudentLessons
