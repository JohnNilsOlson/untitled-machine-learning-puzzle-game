import levelReducer from '../../reducers/level-reducer';
import * as c from '../../actions/ActionTypes';

describe('stageReducer', () => {

  const defaultState = 0;

  test('Should return default state if no action type is passed into the reducer', () => {
    expect(levelReducer({}, { type: null })).toEqual({});
  });

  test('Should change level', () => {
    const level = 1;
    const action = {
      type: c.LEVEL_CHANGE,
      level: level
    }
    expect(levelReducer(defaultState, action)).toEqual(1);
  });
});