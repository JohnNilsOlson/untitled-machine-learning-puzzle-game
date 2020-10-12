import viewReducer from '../../reducers/view-reducer';

describe('viewReducer', () => {
  test('Should return default state if no action type is passed into the reducer', () => {
    expect(viewReducer({}, { type: null })).toEqual({});
  });

  test('Should change view to play', () => {
    const action = {
      type: 'PLAY'
    }
    expect(viewReducer({}, action)).toEqual('play');
  });

  test('Should change view to learn', () => {
    const action = {
      type: 'LEARN'
    }
    expect(viewReducer({}, action)).toEqual('learn');
  });
});