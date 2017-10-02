export default function errorsReducer(state = false, action) {
  switch (action.type) {
    case 'ERROR':
      return true;
    case 'FETCH_EXERCISES':
      return false;
    case 'FETCH_EXERCISES':
      return false;
    default:
      return state;
  }
}