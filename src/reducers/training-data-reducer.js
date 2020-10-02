const defaultState = {
  trainingData: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      const { input, output } = action;
      const round = { input: input, output: output };
      return {
        ...state,
        trainingData: [...state.trainingData, round]
      }
    default:
      return state;
  }
};