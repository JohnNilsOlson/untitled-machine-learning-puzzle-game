import levelReducer from '../../reducers/level-reducer';

describe('stageReducer', () => {

  const defaultState = 0;

  test('Should return default state if no action type is passed into the reducer', () => {
    expect(levelReducer({}, { type: null })).toEqual({});
  });

  test('Should change level', () => {
    const level = 1;
    const action = {
      type: 'LEVEL_CHANGE',
      level: level
    }
    expect(levelReducer(defaultState, action)).toEqual(1);
  });
});