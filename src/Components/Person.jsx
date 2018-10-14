import React from "react";
import Action from "./Action";
import Score from "./Score";
import Tally from "./Tally";
import styles from "./Person.module.scss";

const Person = ({ name, user, score, actions, onAddScore }) => (
  <div className={styles.container} style={{ borderColor: user.isActive && user.color }}>
    <h1 style={{ color: user.color }}>{name} <Score score={score} /></h1>
    <Tally count={Math.abs(score)} lineLength={100} isNegative={score < 0} />
    {/* { actions.map(action => <Action key={action.name} user={name} {...action} onAddScore={onAddScore} />)} */}
    {/* <button type="button" onClick={() => onAddScore(name, 10)}>+10 Opvask</button>
    <button type="button" onClick={() => onAddScore(name, 5)}>+5 Læs bog</button> */}
  </div>
);

export default Person;