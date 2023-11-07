import React from "react";
import "./Title.css";

const Titulo = ({ titleText, color = "", potatoClass = "" }) => {
  return (
    <div>
      <h1
        className={`title ${potatoClass}`} style={{ color: color }}>
        {titleText}
      </h1>
      <hr
        className="title__underscore"
        style={color !== "" ? { borderColor: color } : {}}
      />
    </div>
  );
};

export default Titulo;
