import levelReducer from '../../reducers/level-reducer';

describe('stageReducer', () => {

  test('Should return default state if no action type is passed into the reducer', () => {
    expect(levelReducer({}, { type: null })).toEqual({});
  });
});