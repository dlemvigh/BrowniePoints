import React from "react";
import Score from "./Score"
import TallyContainer from "./Tally";
import styles from "./User.module.scss";

const User = ({ name, color, score, isSelected, onSelect }) => (
  <div
    style={{ 
      borderColor: isSelected && color, 
    }}
    className={styles.container}
    onClick={() => onSelect(name)}
  >
    <h2 className={styles.user} style={{ color }}>
      {name}
    </h2>
    <h2 className={styles.score} style={{ color }}>
      <Score score={score} />
    </h2>
    <div className={styles.content}>
      <TallyContainer count={score} lineLength={100} />
    </div>
  </div>
);

export default User;