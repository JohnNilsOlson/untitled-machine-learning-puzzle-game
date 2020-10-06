import brain from 'brain.js/src';
import * as c from '../actions/ActionTypes';

const defaultState = new brain.recurrent.RNN();

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.TRAIN_AI:
      console.log('Action: ' + action);
      const { trainingData } = action;
      console.log('Training Data: ' + trainingData);
      const newState = state;
      newState.train(trainingData, {
        iterations: 200
      });
      return newState;
    default:
      return state;
  }
}