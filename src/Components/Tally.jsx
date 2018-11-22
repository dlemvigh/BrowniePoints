import React from "react";
import styles from "./Tally.module.scss";

export const TallyContainer = ({ count, lineLength }) => (
  <>
    {Array.from({ length: Math.ceil(count / lineLength) }, (_, index) => 
      <Tally key={index} count={Math.min(lineLength, count - lineLength * index)} />
    )}
  </>
)

export const Tally = ({ count }) => (
  <ul className={styles.tally}>      
    {Array.from({ length: count }, (_, index) => 
      <li key={index}/>
    )}
  </ul>
)

export default TallyContainer;
