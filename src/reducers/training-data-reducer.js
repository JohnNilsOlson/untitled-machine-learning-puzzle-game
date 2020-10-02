const defaultState = {
  trainingData: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      const { input, output } = action;
      const round = { input: input, output: output };
      if (!state.trainingData) {
        return { 
          ...state,
          trainingData: [round]
        }
      } else {
        return {
          ...state,
          trainingData: [...state.trainingData, round]
        }
      }
    default:
      return state;
  }
};