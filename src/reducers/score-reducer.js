const defaultState = {
  playerScore: 0,
  AIScore: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT_PLAYER':
      return {
        ...state,
        playerScore: state.playerScore + 1
      }
    default:
      return state;
  }
}