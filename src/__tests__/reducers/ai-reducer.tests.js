import * as c from '../../actions/ActionTypes';
import AIReducer from '../../reducers/ai-reducer';
import brain from 'brain.js';

describe('AIReducer', () => {

  test('Should return default state if no action type is passed into the reducer', () => {
    expect(AIReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully train ai', () => {
    const defaultState = new brain.recurrent.RNN();
    const trainingData = [
      {input: [1,2], output: 1}
    ]
    const action = {
      type: c.TRAIN_AI,
      trainingData: trainingData
    }
    expect(AIReducer(defaultState, action)).toHaveProperty('hiddenLayers');
  });
});