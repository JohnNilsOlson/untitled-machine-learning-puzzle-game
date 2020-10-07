import React from 'react';
import { connect } from 'react-redux';
import { addTrainingData, incrementPlayerScore, incrementAIScore, trainAI, addUserInput } from '../actions';
import brain from 'brain.js/src';
import Button from 'react-bootstrap/Button';

function RPSStageTwo(props) {

  const trainingDataPlaceholder = [
    {input: 1, output: 2},
    {input: 2, output: 3},
    {input: 3, output: 1}
  ]

  const AI = new brain.recurrent.LSTM();
  AI.train(trainingDataPlaceholder, {
    iterations: 2000
  });

  //Handles AI prediction for round
  const getAIInput = () => {
    const { userPattern } = props;
    return parseInt(AI.run(...userPattern));
  }

  //Handles adding inputs to user pattern
  const addToUserPattern = (playerInput) => {
    const { dispatch } = props;
    dispatch(addUserInput(playerInput));
  }

  //Handles determining winner
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
  // const addData = (playerInput, winningMove) => {
  //   const { dispatch } = props;
  //   dispatch(addTrainingData(playerInput, winningMove));
  // }

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
    const AIInput = getAIInput();
    const winner = winCheck(playerInput, AIInput);
    adjustScore(winner);
    addToUserPattern(playerInput);
    console.log('AI GUESS: ' + AIInput);
  }

  return (
    <React.Fragment>
      <h3>Rock, Paper, Scissors - Stage 2</h3>
      <Button variant='outline-dark' onClick={()=> handleRound(1)}>Rock</Button>
      <Button variant='outline-dark' onClick={()=> handleRound(2)}>Paper</Button>
      <Button variant='outline-dark' onClick={()=> handleRound(3)}>Scissors</Button>
      <hr />
      <h3>Score</h3>
      <h5>Player: {props.playerScore} - AI: {props.AIScore}</h5>
      <hr/>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    trainingData: state.trainingData,
    playerScore: state.playerScore,
    AIScore: state.AIScore,
    userPattern: state.userPattern
  }
}

export default connect(mapStateToProps)(RPSStageTwo);