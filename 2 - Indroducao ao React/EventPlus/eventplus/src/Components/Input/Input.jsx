import React, { useState } from "react";
import "./Input.css";

const Input = ({ type, placeholder, name, id, value }) => {

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        // onChange={(e) => { setNumero1(e.target.value) }}
      />
      <span>{value}</span>
    </>
  );
};

export default Input;
