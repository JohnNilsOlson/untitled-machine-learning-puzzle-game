import React from 'react';
import { connect } from 'react-redux';
import { addTrainingData } from '../actions';
import Button from 'react-bootstrap/Button';

function RockPaperScissors(props) {

  const handleAddingData = () => {
    const { dispatch } = props;
    const input = [1,2];
    const output = 2;
    dispatch(addTrainingData(input, output));
    console.log(props.trainingData);
  }

  return (
    <React.Fragment>
      <h3>Rock, Paper, Scissors</h3>
      <Button variant='outline-dark' onClick={()=> handleAddingData()}>Add Training Data Test Button</Button>
      <hr />
      <h3>Training Data</h3>
      {props.trainingData.map((round) =>
        <React.Fragment>
        <p>{round.input[0]} vs {round.input[1]}</p>
        <p>Winner: {round.output}</p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    trainingData: state.trainingData
  }
}

export default connect(mapStateToProps)(RockPaperScissors);