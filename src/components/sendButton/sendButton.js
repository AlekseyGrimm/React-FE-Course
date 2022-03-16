import React from 'react';
import './SendButton.css';

const SendButton = (props) => (
  <button className="send-button" type="submit" onClick={props.handleClick}>{props.text}</button>
);


export default SendButton;
