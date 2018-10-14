import React from "react";

const Action = ({ name, score, onAddScore }) => (
  <button 
    type="button" 
    onClick={() => onAddScore(score)}
    className={"btn btn-primary"}
  >+{score} {name}</button>
);

export default Action;