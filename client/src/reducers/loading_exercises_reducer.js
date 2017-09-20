export default function loadingExercisesReducer(state = false, action) {
  switch (action.type) {
    case 'LOADING_EXERCISES':
      return true
    case 'FETCH_EXERCISES':
      return false
    default:
      return state
  }
}