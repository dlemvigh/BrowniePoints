import React from "react";
import Action from "./Action";
import styles from "./ActionContainer.module.scss";

const ActionContainer = ({ actions, hasSelected, onAddScore, onStartEditing }) => (
  <>
    <div className={hasSelected ? styles.hasSelected : styles.noSelected}>
      { hasSelected ? actions.map(action =>
          <Action key={action.name} {...action} onAddScore={onAddScore} />
      ) : <NoSelected onStartEditing={onStartEditing} />}
    </div>
    <button className="btn btn-link" onClick={onStartEditing}>Rediger aktiviteter</button>
  </>
);

const NoSelected = ({ onStartEditing }) => (
  <div>
      Vælg en eller flere personer, for at tildele point
  </div>
)

export default ActionContainer;
