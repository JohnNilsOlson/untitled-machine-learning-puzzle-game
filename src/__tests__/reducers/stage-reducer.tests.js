import stageReducer from '../../reducers/stage-reducer';
import * as c from '../../actions/ActionTypes';

describe('stageReducer', () => {
  test('Should return default state if no action type is passed into the reducer', () => {
    expect(stageReducer({}, { type: null })).toEqual({});
  });
});