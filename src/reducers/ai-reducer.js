import brain from 'brain.js';
import * as c from '../actions/ActionTypes';

const defaultState = new brain.recurrent.RNN();

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.TRAIN_AI:
      const { trainingData } = action;
      const newState = state;
      newState.train(trainingData);
      return newState;
    default:
      return state;
  }
}