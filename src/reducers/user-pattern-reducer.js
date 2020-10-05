const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      const { input } = action;
      return [...state, input];
    default:
      return state;
  }
}