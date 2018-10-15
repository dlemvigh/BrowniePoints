import React from "react";
import styles from "./Action.module.scss";

const Action = ({ name, score, onAddScore }) => (
  <button 
    type="button" 
    onClick={() => onAddScore(score)}
    className={`btn ${score >= 0 ? "btn-success" : "btn-danger"} ${styles.action}`}
  >{score > 0 && "+"}{score} {name}</button>
);

export default Action;