import stageReducer from '../../reducers/stage-reducer';
import * as c from '../../actions/ActionTypes';

describe('stageReducer', () => {

  let defaultState = 1;

  test('Should return default state if no action type is passed into the reducer', () => {
    expect(stageReducer({}, { type: null })).toEqual({});
  });

  test('Should increment stage by 1', () => {
    const action = {
      type: c.INCREMENT_STAGE
    }
    expect(stageReducer(defaultState, action)).toEqual(2);
  });
});