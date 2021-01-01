let initialState = { farmsArray: [], cuurentAccount: null };
function homeReducer(state = initialState, action) {
  switch (action.type) {
    case "STORE_DATA":
      state = { ...state, farmsArray: action.result };
      return state;
      case "SET_CURRENT_ACCOUNT":
        state = { ...state, cuurentAccount: action.account };
        return state;
    
    default:
      return state;
  }
}
export default homeReducer;
