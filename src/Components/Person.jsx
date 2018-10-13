import React from "react";
import Action from "./Action";
import styles from "./Person.module.scss";

const Person = ({ name, score, actions, onAddScore }) => (
  <div className={styles.person}>
    {name} has earned {score} brownie points.
    <br />
    { actions.map(action => <Action key={action.name} user={name} {...action} onAddScore={onAddScore} />)}
    {/* <button type="button" onClick={() => onAddScore(name, 10)}>+10 Opvask</button>
    <button type="button" onClick={() => onAddScore(name, 5)}>+5 Læs bog</button> */}
  </div>
);

export default Person;