import React from "react";
//import styles from "./Action.module.scss"

const Action = ({ user, name, score, onAddScore }) => (
  <button 
    type="button" 
    onClick={() => onAddScore(user, score)}
    className={"btn btn-primary"}
>+{score} {name}</button>
);

export default Action;