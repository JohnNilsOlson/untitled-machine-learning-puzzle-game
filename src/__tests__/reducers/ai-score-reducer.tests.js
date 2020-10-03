import AIScoreReducer from '../../reducers/ai-score-reducer';
import * as c from '../../actions/ActionTypes';

describe('scoreReducer', () => {

  const defaultState = 0
  
  test('Should return default state if no action type is passed into the reducer', () => {
    expect(AIScoreReducer({}, { type: null })).toEqual({});
  });

  test('Should increment player score by 1', () => {
    const action = {
      type: c.INCREMENT_AI
    }
    expect(AIScoreReducer(defaultState, action)).toEqual(1);
  });
});