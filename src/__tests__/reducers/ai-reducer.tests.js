import AIReducer from '../../reducers/ai-reducer';

describe('AIReducer', () => {

  test('Should return default state if no action type is passed into the reducer', () => {
    expect(AIReducer({}, { type: null })).toEqual({});
  });
});