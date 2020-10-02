import trainingDataReducer from '../../reducers/training-data-reducer';
import * as c from '../../actions/ActionTypes';

describe('trainingDataReducer', () => {

  let action;

  const defaultState = {
    trainingData: []
  }

  const stateWithData = {
    trainingData: [{input:[1,2],output:2}]
  }


  test('Should return default state if no action type is passed into the reducer', () => {
    expect(trainingDataReducer({}, { type: null })).toEqual({});
  });

  test('Should add training data to empty training data array', () => {
    const input = [1,2]
    const output = 2
    action = {
      type: c.ADD_DATA,
      input: input,
      output: output,
    }
    expect(trainingDataReducer(defaultState, action)).toEqual({
      trainingData: [
        {input: [1,2],output: 2,}
      ]
    });
  });

  test('Should add training data to non-empty training data array', () => {
    const input = [1,3]
    const output = 1
    action = {
      type: c.ADD_DATA,
      input: input,
      output: output
    }
    expect(trainingDataReducer(stateWithData, action)).toEqual({
      trainingData: [
        {input: [1,2],output: 2},
        {input: [1,3],output: 1}
      ]
    });
  });

});