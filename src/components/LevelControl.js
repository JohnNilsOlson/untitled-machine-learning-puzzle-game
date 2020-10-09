import React from 'react';
import { connect } from 'react-redux';

function LevelControl(props) {
  if (props.level === 0) {
    return <h3>Introduction Placeholder</h3>
  } else if (props.level === 1) {
    return <h3>Rock, Paper, Scissors Placeholder</h3>
  }
}

const mapStateToProps = state => {
  return {
    level: state.levelReducer
  }
}

export default connect(mapStateToProps)(LevelControl);