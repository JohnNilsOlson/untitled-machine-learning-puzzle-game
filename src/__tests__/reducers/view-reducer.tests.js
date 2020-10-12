import viewReducer from '../../reducers/view-reducer';

describe('viewReducer', () => {
  test('Should return default state if no action type is passed into the reducer', () => {
    expect(viewReducer({}, { type: null })).toEqual({});
  });
});