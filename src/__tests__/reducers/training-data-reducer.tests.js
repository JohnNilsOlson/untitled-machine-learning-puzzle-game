import trainingDataReducer from '../../reducers/training-data-reducer';

describe('trainingDataReducer', () => {

  let action;

  test('Should return default state if no action type is passed into the reducer', () => {
    expect(trainingDataReducer({}, { type: null })).toEqual({});
  });

  test('Should add training data', () => {
    const input = [1,2]
    const output = 2
    const id = 1
    action = {
      type: 'ADD_DATA',
      input: input,
      output: output,
      id: id
    }
    expect(trainingDataReducer({}, action)).toEqual({
      [id] : {
        input: [1,2],
        output: 2,
        id: id 
      }
    });
  });
  
});