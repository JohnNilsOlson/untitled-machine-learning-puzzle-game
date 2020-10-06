import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case c.INCREMENT_STAGE:
      const newState = state + 1;
      return newState;
    default:
      return state;
    }
};