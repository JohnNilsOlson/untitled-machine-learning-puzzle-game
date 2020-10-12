import React from 'react';
import { connect } from 'react-redux';

function LevelControl(props) {
  if (props.level === 0) {
    return (
      <h1>Introduction Placeholder</h1>
    )
  } else if (props.level === 1) {
    return (
      <h1>Rock, Paper, Scissors Placeholder</h1>
    )
  }
}

const mapStateToProps = state => {
  return {
    level: state.level
  }
}

export default connect(mapStateToProps)(LevelControl);