import rootReducer from '../../reducers/index';
import trainingDataReducer from '../../reducers/training-data-reducer';
import playerScoreReducer from '../../reducers/player-score-reducer';
import AIScoreReducer from '../../reducers/ai-score-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      trainingData: [],
      playerScore: 0,
      AIScore: 0
    });
  });

  test('Check that initial state of trainingDataReducer matches rootReducer', () => {
    expect(store.getState().trainingData).toEqual(trainingDataReducer(undefined, { type: null }));
  });

  test('Check that initial state of playerScoreReducer matches rootReducer', () => {
    expect(store.getState().playerScore).toEqual(playerScoreReducer(undefined, { type: null }));
  });

  test('Check that initial state ofAIScoreReducer matches rootReducer', () => {
    expect(store.getState().AIScore).toEqual(AIScoreReducer(undefined, { type: null }));
  });
});