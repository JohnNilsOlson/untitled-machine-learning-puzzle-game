import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addUserInput } from '../actions';
import brain from 'brain.js/src';

import rockIcon from '../assets/images/rock.png';
import paperIcon from '../assets/images/paper.png';
import scissorsIcon from '../assets/images/scissors.png';

function RPSStageTwo(props) {

  const [ AI ] = useState(new brain.recurrent.LSTM());
  const [ playerScore, setPlayerScore ]  = useState(0);
  const [ AIScore, setAIScore ]  = useState(0);
  const [ roundCount, setRoundCount ] = useState(0);

  AI.train(props.trainingData, {
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

  //Handles adjusting score
  const adjustScore = (winner) => {
    if (winner !== null) {
      if (winner === 0) {
        setPlayerScore(playerScore + 1);
      } else {
        setAIScore(AIScore + 1);
      }
    }
  }

  //Combines functions to handle a single round of Rock, Paper, Scissors
  const handleRound = (playerInput) => {
    const AIInput = getAIInput();
    const winner = winCheck(playerInput, AIInput);
    adjustScore(winner);
    setRoundCount(roundCount + 1);
    console.log(roundCount);
    console.log(AIInput);
    addToUserPattern(playerInput);
  }

  return (
    <React.Fragment>
      <h3>Rock, Paper, Scissors - Stage 2</h3>
      <img src={rockIcon} alt='rock' width='100' height='100' onClick={()=> handleRound(1)}/>
      <img src={paperIcon} alt='paper'  width='100' height='100' onClick={()=> handleRound(2)}/>
      <img src={scissorsIcon} alt='scissors' width='100' height='100' onClick={()=> handleRound(3)}/>
      <hr />
      <h3>Score</h3>
      <h5>Player: {playerScore} - AI: {AIScore}</h5>
      <hr/>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    trainingData: state.trainingData,
    userPattern: state.userPattern
  }
}

export default connect(mapStateToProps)(RPSStageTwo);