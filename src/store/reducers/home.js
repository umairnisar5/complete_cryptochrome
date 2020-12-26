let initialState = [];
function homeReducer(state = initialState, action) {
  switch (action.type) {
    case "STORE_DATA":
      return action.result;
    default:
      return state;
  }
}
export default homeReducer;
