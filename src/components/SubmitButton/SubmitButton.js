import React from 'react';
import './SubmitButton.css';

const SubmitButton = (props) => (
  <button className="submit-button" type="submit" onClick={props.handleClick}>{props.text}</button>
)


export default SubmitButton
