import * as c from '../actions/ActionTypes';

const defaultState = 'play';

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.PLAY:
      return 'play';
    case c.LEARN:
      return 'learn';
    case c.DATA:
      return 'data';
    default:
      return state;
  }
}