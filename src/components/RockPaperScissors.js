import React from 'react';
import { connect } from 'react-redux';
import { addTrainingData, incrementPlayerScore, incrementAIScore, trainAI, addUserInput } from '../actions';
import Button from 'react-bootstrap/Button';

// import brain from 'brain.js/src';

function RockPaperScissors(props) {

  //Placeholder for teaching AI the rules of Rock Paper Scissors
  const trainingDataPlaceholder = [
    {input: 1, output: 2},
    {input: 2, output: 3},
    {input: 3, output: 1}
  ]

  //Handles AI prediction for round
  const getAIInput = () => {
    const { AI, trainingData, dispatch } = props;
    if (trainingData.length === 0) {
      AI.train(trainingDataPlaceholder, {
        iterations: 200
      });
      return parseInt(AI.run());
    } else {
      dispatch(trainAI(trainingData));
      const { userPattern } = props;
      return parseInt(AI.run(userPattern[userPattern.length -1]));
    }
  }

  //Handles adding inputs to user pattern
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

  const winningMoveCheck = (playerInput, AIInput) => {
    let winningMove = null;
    if (playerInput === AIInput) {
      winningMove = null;
    } else {
      if (playerInput === 1)  {
        winningMove = 2;
      } else if (playerInput === 2) {
        winningMove = 3;
      } else {
        winningMove = 1;
      }
    }
    return winningMove;
  }

  //Handles formatting and saving training data to state
  const addData = (playerInput, winningMove) => {
    const { dispatch } = props;
    dispatch(addTrainingData(playerInput, winningMove));
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
    const AIInput = getAIInput();
    const winner = winCheck(playerInput, AIInput);
    const winningMove = winningMoveCheck(playerInput, AIInput);
    adjustScore(winner);
    if (winner !== null) {
      addData(playerInput, winningMove);
    }
    addToUserPattern(playerInput);
    console.log(AIInput);
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
          <p>{JSON.stringify(round)}</p>
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