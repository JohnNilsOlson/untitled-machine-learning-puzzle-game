import React from 'react';
import { connect } from 'react-redux';
import { addTrainingData } from '../actions';
import Button from 'react-bootstrap/Button';

function RockPaperScissors(props) {

  //Handles AI prediction for round
  const getAIInput = () => {
    return Math.floor(Math.random() * (4 - 1)) + 1;
  }

  //Handles determining winner
  // 0 represents player(index[0] of matchup for training data - 1 represents AI (index[1] of matchup for training data))
  const winCheck = (playerInput, AIInput) => {
    let winner = null;
    if (playerInput === AIInput) {
      winner = null;
    } else {
      if (playerInput === 1)  {
        if (AIInput === 2) {
          winner = 1;
        } else {
          winner = 2;
        }
      } else if (playerInput === 2) {
        if (AIInput === 3) {
          winner = 1;
        } else {
          winner = 2
        }
      } else {
        if (AIInput === 1) {
          winner = 1;
        } else {
          winner = 2;
        }
      }
    }
    return winner;
  }

  //Handles formatting and saving training data to state
  const AddData = (playerInput, AIInput, winner) => {
    const { dispatch } = props;
    const matchUp = [playerInput, AIInput];
    dispatch(addTrainingData(matchUp, winner));
  }

  //Combines functions to handle a single round of Rock, Paper, Scissors
  const handleRound = (playerInput) => {
    let AIInput = getAIInput();
    let winner = winCheck(playerInput, AIInput);
    AddData(playerInput, AIInput, winner);
  }

  return (
    <React.Fragment>
      <h3>Rock, Paper, Scissors</h3>
      {/* <Button variant='outline-dark' onClick={()=> handleAddingData()}>Add Training Data Test Button</Button> */}
      <Button variant='outline-dark' onClick={()=> handleRound(1)}>Rock</Button>
      <Button variant='outline-dark' onClick={()=> handleRound(2)}>Paper</Button>
      <Button variant='outline-dark' onClick={()=> handleRound(3)}>Scissors</Button>
      <hr />
      <h3>Training Data</h3>
      {props.trainingData.map((round, index) =>
        <React.Fragment>
          <div id={index}>
            <p>{round.input[0]} vs {round.input[1]}</p>
            <p>Winner: {round.output}</p>
          </div>
          <hr/>
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