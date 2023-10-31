import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <div className="title">
      <h1 className="title__text">{props.text}</h1>
      <hr className="title__line" />
    </div>
  );
}

export default Title;


// {
  
// <div class="title" style="background-color: red; padding: 70px;">
//     <h1 class="title__text title__text-white">Título</h1>
//     <hr class="title__line title__line-white"/>
// </div> 
// }
