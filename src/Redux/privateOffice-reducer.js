import { ExercisesAPI, LessonsAPI, StudentsAPI } from "../api/api";

const SET_STUDENTS = "SET_STUDENTS";
const SET_LESSONS = "SET_LESSONS";
const SET_EXERCISES = "SET_EXERCISES";

let initialState = {
   students: [],
   lessons: [],
   exercises: [],
   tabsTypes: [
      'Ученики',
      'Группы',
   ],
}

export const privateOfficeReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_STUDENTS:
         return {
            ...state,
            students: [
               ...action.students
            ]
         }

      case SET_LESSONS:
         return {
            ...state,
            lessons: action.lessons
         }

      case SET_EXERCISES:
         return {
            ...state,
            exercises: action.exercises
         }
   
      default:
         return state;
   }
}

const addStudents = (students) => ({ type: SET_STUDENTS, students });
const addLessons = (studentId, lessons) => ({ type: SET_LESSONS, studentId, lessons });
const addExercises = (studentId, lessonId, exercises) => ({ type: SET_EXERCISES, studentId, lessonId, exercises });

export const setStudents = () => {
   return async (dispatch) => {
      let students = await StudentsAPI.getStudents();

      dispatch(addStudents(students));
   }
};

export const setLessons = (studentId) => {
   return async (dispatch) => {
      let lessons = await LessonsAPI.getLessons(studentId);

      dispatch(addLessons(studentId, lessons));
   }
};

export const setExercises = (studentId, lessonId) => {
   return async (dispatch) => {
      let exercises = await ExercisesAPI.getExercises(studentId, lessonId);

      dispatch(addExercises(studentId, lessonId, exercises));
   }
};