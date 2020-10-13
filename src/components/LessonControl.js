import React from 'react';
import { connect } from 'react-redux';

function dataControl(props) {
  return (
    <h3>Level Specific Lesson Placeholder</h3>
  )
}

const mapStateToProps = state => {
  return {
    level: state.level
  }
}

export default connect(mapStateToProps)(dataControl);