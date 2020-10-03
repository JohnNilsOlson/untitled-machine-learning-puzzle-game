import * as c from '../actions/ActionTypes';

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.ADD_DATA:
      const { input, output } = action;
      const round = { input: input, output: output };
      return [...state, round]
    default:
      return state;
  }
};