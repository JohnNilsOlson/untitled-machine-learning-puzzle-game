import * as c from './ActionTypes';

export const addTrainingData = (input, output) => ({
  type: c.ADD_DATA,
  input: input,
  output: output
});