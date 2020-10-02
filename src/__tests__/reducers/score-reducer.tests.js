import scoreReducer from '../../reducers/score-reducer';

describe('scoreReducer', () => {

  test('Should return default state if no action type is passed into the reducer', () => {
    expect(scoreReducer({}, { type: null })).toEqual({});
  });
});