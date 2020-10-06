import * as c from '../actions/ActionTypes';

const defaultState = 1;

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.INCREMENT_STAGE:
      const newState = state + 1;
      return newState;
    default:
      return state;
    }
};