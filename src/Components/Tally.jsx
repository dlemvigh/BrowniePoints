import React from "react";
import styles from "./Tally.module.scss";

const Tally = ({ count, lineLength, isNegative }) => (
  <>
    {Array.from({ length: Math.ceil(count / lineLength) }, (_, line) => 
      <ul className={[styles.tally, isNegative && styles.negative].join(" ")} key={line}>      
        {Array.from({ length: Math.min(lineLength, count - lineLength * line)}, (_, index) => <li key={index}/>)}
      </ul>
    )}
  </>
)

export default Tally;
