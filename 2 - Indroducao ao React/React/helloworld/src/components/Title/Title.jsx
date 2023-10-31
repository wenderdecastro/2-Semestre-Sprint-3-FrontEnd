import React from "react";
import './Title.css';

const Title = (props) => {
  return <h1 className="title">hello {props.text}</h1>;
}

export default Title;