import rootReducer from '../../reducers/index';
import trainingDataReducer from '../../reducers/training-data-reducer';
// import playerScoreReducer from '../../reducers/player-score-reducer';
// import AIScoreReducer from '../../reducers/ai-score-reducer';
// import AIReducer from '../../reducers/ai-reducer';
import levelReducer from '../../reducers/level-reducer';
import userPatternReducer from '../../reducers/user-pattern-reducer';
import stageReducer from '../../reducers/stage-reducer';
import * as c from '../../actions/ActionTypes';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toHaveProperty('trainingData');
    expect(rootReducer({}, { type: null })).toHaveProperty('userPattern');
    expect(rootReducer({}, { type: null })).toHaveProperty('stage');
  });

  test('Check that initial state of trainingDataReducer matches rootReducer', () => {
    expect(store.getState().trainingData).toEqual(trainingDataReducer(undefined, { type: null }));
  });

  test('Check that initial state of userPatternReducer matches rootReducer', () => {
    expect(store.getState().userPattern).toEqual(userPatternReducer(undefined, {type: null }));
  });

  test('Check that initial state of stageReducer matches rootReducer', () => {
    expect(store.getState().stage).toEqual(stageReducer(undefined, {type: null }));
  });
  
  test('Check that initial state of levelReducer matches rootReducer', () => {
    expect(store.getState().level).toEqual(levelReducer(undefined, {type: null }));
  });

  test('Check that rootReducer correctly passes action to trainingDataReducer', () => {
    const input = [1,2];
    const output = 1
    const action = {
      type: c.ADD_DATA,
      input: input,
      output: output,
    }
    store.dispatch(action);
    expect(store.getState().trainingData).toEqual(trainingDataReducer(undefined, action));
  });

  test('Check that rootReducer correctly passes action to userPatternReducer',() => {
    const input = 1;
    const action = {
      type: c.ADD_INPUT,
      input: input
    }
    store.dispatch(action);
    expect(store.getState().userPattern).toEqual(userPatternReducer(undefined, action));
  });

  test('Check that rootReducer correctly passes action to stageReducer', () => {
    const action = {
      type: c.INCREMENT_STAGE
    }
    store.dispatch(action);
    expect(store.getState().stage).toEqual(stageReducer(undefined, action));
  });

  test('Check that rootReducer correctly passes action to levelReducer',() => {
    const level = 1;
    const action = {
      type: c.LEVEL_CHANGE,
      level: level
    }
    store.dispatch(action);
    expect(store.getState().level).toEqual(levelReducer(undefined, action));
  });
});