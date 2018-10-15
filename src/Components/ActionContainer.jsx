import React from "react";
import classNames from "classnames";
import Action from "./Action";
import styles from "./ActionContainer.module.scss";

const ActionContainer = ({ actions, hasSelected, onAddScore }) => (
  <>
    <div className={hasSelected ? styles.hasSelected : styles.noSelected}>
      { hasSelected ? actions.map(action =>
          <Action key={action.name} {...action} onAddScore={onAddScore} />
      ) : <NoSelected />}
    </div>
  </>
);

const NoSelected = () => (
  <div>
    Vælg en eller flere personer, for at tildele point
  </div>
)

export default ActionContainer;
