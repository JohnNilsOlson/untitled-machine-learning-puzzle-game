import viewReducer from '../../reducers/view-reducer';
import * as c from '../../actions/ActionTypes';

describe('viewReducer', () => {
  test('Should return default state if no action type is passed into the reducer', () => {
    expect(viewReducer({}, { type: null })).toEqual({});
  });

  test('Should change view to play', () => {
    const action = {
      type: c.PLAY
    }
    expect(viewReducer({}, action)).toEqual('play');
  });

  test('Should change view to learn', () => {
    const action = {
      type: c.LEARN
    }
    expect(viewReducer({}, action)).toEqual('learn');
  });

  test('Should change view to data', () => {
    const action = {
      type: c.DATA
    }
    expect(viewReducer({}, action)).toEqual('data');
  });
});