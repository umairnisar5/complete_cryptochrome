let initialState =  {
    lpToken: "",
    rewardToken: "",
    startBlock: "",
    blockReward: "",
    bonusEndBlock: "",
    bonus: "",
    endBlock: "",
    farmableSupply: "",
    bonnumFarmersus: "",
}
function homeReducer(state = initialState, action) {
    switch (action.type) {
      case 'STORE_DATA':
        return action.result;
      default:
        return state
    }
}
export default homeReducer;