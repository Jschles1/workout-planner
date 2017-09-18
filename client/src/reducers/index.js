import { combineReducers } from 'redux';
import workoutsReducer from './workouts_reducer';
import exercisesReducer from './exercises_reducer';

const rootReducer = combineReducers({ workouts: workoutsReducer, exercises: exercisesReducer });

export default rootReducer;