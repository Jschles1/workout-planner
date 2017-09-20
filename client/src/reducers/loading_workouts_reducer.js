export default function loadingWorkoutsReducer(state = false, action) {
  switch (action.type) {
    case 'LOADING_WORKOUTS':
      return true
    case 'FETCH_WORKOUTS':
      return false
    default:
      return state
  }
}