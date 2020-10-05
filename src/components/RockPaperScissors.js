import React from 'react';
import { connect } from 'react-redux';
import { addTrainingData, incrementPlayerScore, incrementAIScore, trainAI, addUserInput } from '../actions';
import Button from 'react-bootstrap/Button';

function RockPaperScissors(props) {

  //Handles AI prediction for round
  const getAIInput = () => {
    return Math.floor(Math.random() * (4 - 1)) + 1;
  }

  const addToUserPattern = (playerInput) => {
    const { dispatch } = props;
    dispatch(addUserInput(playerInput));
  }

  //Handles determining winner
  // 0 represents player winning (index[0] of matchup for training data - 1 represents AI winning (index[1] of matchup for training data))
  const winCheck = (playerInput, AIInput) => {
    let winner = null;
    if (playerInput === AIInput) {
      winner = null;
    } else {
      if (playerInput === 1)  {
        if (AIInput === 2) {
          winner = 1;
        } else {
          winner = 0;
        }
      } else if (playerInput === 2) {
        if (AIInput === 3) {
          winner = 1;
        } else {
          winner = 0;
        }
      } else {
        if (AIInput === 1) {
          winner = 1;
        } else {
          winner = 0;
        }
      }
    }
    return winner;
  }

  //Handles formatting and saving training data to state
  const addData = (playerInput, AIInput, winner) => {
    const { dispatch } = props;
    const matchUp = [playerInput, AIInput];
    dispatch(addTrainingData(matchUp, winner));
  }

  //Handles adjusting score
  const adjustScore = (winner) => {
    const { dispatch } = props;
    if (winner !== null) {
      if (winner === 0) {
        dispatch(incrementPlayerScore());
      } else {
        dispatch(incrementAIScore());
      }
    }
  }

  //Combines functions to handle a single round of Rock, Paper, Scissors
  const handleRound = (playerInput) => {
    let AIInput = getAIInput();
    let winner = winCheck(playerInput, AIInput);
    adjustScore(winner);
    addData(playerInput, AIInput, winner);
    addToUserPattern(playerInput);
  }

  return (
    <React.Fragment>
      <h3>Rock, Paper, Scissors</h3>
      <Button variant='outline-dark' onClick={()=> handleRound(1)}>Rock</Button>
      <Button variant='outline-dark' onClick={()=> handleRound(2)}>Paper</Button>
      <Button variant='outline-dark' onClick={()=> handleRound(3)}>Scissors</Button>
      <hr />
      <h3>Score</h3>
      <h5>Player: {props.playerScore} - AI: {props.AIScore}</h5>
      <hr/>
      <h3>Player Pattern</h3>
      <p>{props.userPattern}</p>
      <hr/>
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
    trainingData: state.trainingData,
    playerScore: state.playerScore,
    AIScore: state.AIScore,
    AI: state.AI,
    userPattern: state.userPattern
  }
}

export default connect(mapStateToProps)(RockPaperScissors);