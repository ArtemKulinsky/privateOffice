import React from 'react';
import { Route } from 'react-router-dom';
import './StudentInf.scss';
import StudentInfHeader from './StudentInfHeader/StudentInfHeader';
import StudentTable from './StudentLessons/StudentTable';
import StudentLessons from './StudentLessons/StudentTable';

const StudentInf = ({students, lessons, setLessons}) => {
  let lessonsColumnsNames = [
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
    <section
      className="main__student-inf student-inf"
    >
      <StudentInfHeader students={students}/>
      <StudentTable
        lessons={lessons}
        setLessons={setLessons}
        lessonsColumnsNames={lessonsColumnsNames}
      />
    </section>)
}

export default StudentInf
