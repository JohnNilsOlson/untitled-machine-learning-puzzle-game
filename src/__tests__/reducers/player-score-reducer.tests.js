import playerScoreReducer from '../../reducers/player-score-reducer';
import * as c from '../../actions/ActionTypes';

describe('scoreReducer', () => {

  const defaultState = 0
  
  test('Should return default state if no action type is passed into the reducer', () => {
    expect(playerScoreReducer({}, { type: null })).toEqual({});
  });

  test('Should increment player score by 1', () => {
    const action = {
      type: c.INCREMENT_PLAYER
    }
    expect(playerScoreReducer(defaultState, action)).toEqual(1);
  });
});