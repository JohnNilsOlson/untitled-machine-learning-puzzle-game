import * as c from '../actions/ActionTypes';

const defaultState = 0;

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.LEVEL_CHANGE:
      const { level } = action;
      const newState = state + level;
      return newState;
    default:
      return state;
  }
}