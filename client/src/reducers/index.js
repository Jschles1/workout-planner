import { combineReducers } from 'redux';
import workoutsReducer from './workouts_reducer';
import exercisesReducer from './exercises_reducer';
import loadingWorkoutsReducer from './loading_workouts_reducer';
import loadingExercisesReducer from './loading_exercises_reducer';

const rootReducer = combineReducers({ 
  workouts: workoutsReducer, 
  exercises: exercisesReducer,
  loadingWorkouts: loadingWorkoutsReducer ,
  loadingExercises: loadingExercisesReducer
});

export default rootReducer;