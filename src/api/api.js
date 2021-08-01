export const StudentsAPI = {
   getStudents() {
      return new Promise((resolve) => { ///imitation of server`s request
         setTimeout(() => {
            let students = [ 
               { id: 0, name: 'Константин' },
               { id: 1, name: 'Алексей' },
               { id: 2, name: 'Ирина' },
               { id: 3, name: 'Александр' },
               { id: 4, name: 'Илья' },
               { id: 5, name: 'Никита' },
               { id: 6, name: 'Артур' },
               { id: 7, name: 'Никита' },
               { id: 8, name: 'Никита' },
               { id: 9, name: 'Артур' },
               { id: 10, name: 'Никита' },
               { id: 11, name: 'Никита' },
               { id: 12, name: 'Константин' },
               { id: 13, name: 'Алексей' },
               { id: 14, name: 'Ирина' },
               { id: 15, name: 'Александр' },
               { id: 16, name: 'Илья' },
               { id: 17, name: 'Никита' },
               { id: 18, name: 'Артур' },
               { id: 19, name: 'Никита' },
               { id: 20, name: 'Никита' },
               { id: 22, name: 'Артур' },
               { id: 23, name: 'Никита' },
               { id: 24, name: 'Никита' },
            ]

            resolve(students) ///imitaion of server`s response
         }, 1000);
      })
   },
}

export const LessonsAPI = {
   getLessons(studentId) { ///argument for URL
      return new Promise((resolve) => { ///imitation of server`s request
         setTimeout(() => {
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

            resolve(lessons);  ///imitaion of server`s response
         }, 500);
      })
   },
}

export const ExercisesAPI = {
   getExercises(studentId, lessonId) { ///arguments for URL
      return new Promise((resolve) => { ///imitation of server`s request
         setTimeout(() => {
            let exercises = [
               { id: '0', name: 'Упражнение 1', isUsedDesicion: true, isTookHint: true, amountOfMistakes: 19, amountOfInaccuracies: 33, spentTime: 100, earnedTerricoins: '1000'},
               { id: '1', name: 'Упражнение 2', isUsedDesicion: false, isTookHint: true, amountOfMistakes: 19, amountOfInaccuracies: 33, spentTime: 100, earnedTerricoins: '1000' },
               { id: '2', name: 'Упражнение 3', isUsedDesicion: false, isTookHint: false, amountOfMistakes: 19, amountOfInaccuracies: 33, spentTime: 100, earnedTerricoins: '1000' },
               { id: '3', name: 'Упражнение 4', isUsedDesicion: false, isTookHint: true, amountOfMistakes: 19, amountOfInaccuracies: 33, spentTime: 100, earnedTerricoins: '1000' },
               { id: '4', name: 'Упражнение 5', isUsedDesicion: false, isTookHint: true, amountOfMistakes: 19, amountOfInaccuracies: 33, spentTime: 100, earnedTerricoins: '1000' },
               { id: '5', name: 'Упражнение 6', isUsedDesicion: false, isTookHint: true, amountOfMistakes: 19, amountOfInaccuracies: 33, spentTime: 100, earnedTerricoins: '1000' },
               { id: '6', name: 'Упражнение 7', isUsedDesicion: false, isTookHint: true, amountOfMistakes: 19, amountOfInaccuracies: 33, spentTime: 100, earnedTerricoins: '1000' },
            ]; 

            resolve(exercises) ///imitaion of server`s response
         }, 500);
      })
   },
}