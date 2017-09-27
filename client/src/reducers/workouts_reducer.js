export default function workoutsReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_WORKOUTS':
      const workouts = action.payload.filter(workout => workout.suggested === false);
      return workouts;
    case 'FETCH_SUGGESTED_WORKOUTS':
      const suggestedWorkouts = action.payload.filter(workout => workout.suggested === true);
      return suggestedWorkouts;
    case 'ADD_WORKOUT':
      return state.concat(action.payload);
    case 'DELETE_WORKOUT':
      return state.filter(workout => workout.id !== action.id);
    default:
      return state;
  }
}

// On edit, 1st remove the old workout through filter by id, then add back the edited workout to state