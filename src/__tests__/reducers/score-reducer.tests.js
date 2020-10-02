import scoreReducer from '../../reducers/score-reducer';
import * as c from '../../actions/ActionTypes';

describe('scoreReducer', () => {

  const defaultState = {
    playerScore: 0,
    AIScore: 0
  }

  test('Should return default state if no action type is passed into the reducer', () => {
    expect(scoreReducer({}, { type: null })).toEqual({});
  });

  test('Should increment player score by 1', () => {
    const action = {
      type: c.INCREMENT_PLAYER
    }
    expect(scoreReducer(defaultState, action)).toEqual({
      playerScore: 1,
      AIScore: 0
    });
  });

  test('Should increment AI score by 1', () => {
    const action = {
      type: c.INCREMENT_AI
    }
    expect(scoreReducer(defaultState, action)).toEqual({
      playerScore: 0,
      AIScore: 1
    });
  });
});