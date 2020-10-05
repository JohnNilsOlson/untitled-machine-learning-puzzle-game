import userPatternReducer from '../../reducers/user-pattern-reducer';

describe('user pattern reducer', () => {

  test('Should return default state if no action type is passed into the reducer', () => {
    expect(userPatternReducer({}, { type: null })).toEqual({});
  });
});