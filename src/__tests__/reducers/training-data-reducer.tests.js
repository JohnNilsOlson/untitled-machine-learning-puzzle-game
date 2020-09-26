import trainingDataReducer from '../../reducers/training-data-reducer';

describe('trainingDataReducer', () => {
  test('Should return default state if no action type is passed into the reducer', () => {
    expect(trainingDataReducer({}, { type: null })).toEqual({});
  });
});