import * as c from '../actions/ActionTypes';

const defaultState = 0;

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.INCREMENT_PLAYER:
      const newState = state + 1;
      return newState;
    default:
      return state;
  }
}