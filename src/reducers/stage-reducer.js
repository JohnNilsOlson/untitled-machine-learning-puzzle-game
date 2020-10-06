export default (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT_STAGE':
      const newState = state + 1;
      return newState;
    default:
      return state;
    }
};