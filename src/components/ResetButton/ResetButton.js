import React from 'react';
import './ResetButton.css';

const ResetButton = (props) => (
  <button className="reset-button" type="reset" onClick={props.handleReset}>{props.text}</button>
)

export default ResetButton
