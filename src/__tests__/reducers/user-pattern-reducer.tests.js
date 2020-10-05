import userPatternReducer from '../../reducers/user-pattern-reducer';
import * as c from '../../actions/ActionTypes';

describe('user pattern reducer', () => {

  const defaultState = [];

  test('Should return default state if no action type is passed into the reducer', () => {
    expect(userPatternReducer({}, { type: null })).toEqual({});
  });

  test('Should correctly add value to user pattern array', () => {
    const input = 1;
    const action = {
      type: c.ADD_INPUT,
      input: input
    }
    expect(userPatternReducer(defaultState, action)).toEqual([1])
  });
});