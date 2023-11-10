import React from "react";
import "./Title.css";

const Titulo = ({ titleText, color = "", className = "" }) => {
  return (
    <div>
      <h1
        className={`title ${className}`} style={{ color: color }}>
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
