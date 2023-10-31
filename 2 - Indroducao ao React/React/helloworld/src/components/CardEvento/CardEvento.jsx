import React from "react";
import "./CardEvento.css";

const CardEvento = ({title, description, linkText}) => {
  return (
    <div className="card">
      <h2 className="card__title-text">{title}</h2>
      <p className="card__paragraph">{description}</p>
      <a href="https://www.google.com" className="card__link-connect">
        {linkText}
      </a>
    </div>
  );
};

export default CardEvento;
