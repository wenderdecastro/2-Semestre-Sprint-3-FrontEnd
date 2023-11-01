import React from "react";
import "./Button.css";

const Button = ({fnClick, text, type}) => {
  return <button onClick={fnClick} class="button" type={type}>{text}</button>;
};

export default Button;
