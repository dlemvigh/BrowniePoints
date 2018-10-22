import React from "react";
import Action from "./Action";
import styles from "./ActionContainer.module.scss";
import ActionForm from "./ActionForm";

const ActionContainer = ({ actions, hasSelected, onAddScore, editing, onStartEditing, onStopEditing, onSaveActions }) => (
  <>
    { editing ?
      <ActionForm actions={actions} onSaveActions={onSaveActions} onStopEditing={onStopEditing} /> :
      <>
    <div className={hasSelected ? styles.hasSelected : styles.noSelected}>
      { hasSelected ? actions.map(action =>
          <Action key={action.name} {...action} onAddScore={onAddScore} />
      ) : <NoSelected onStartEditing={onStartEditing} />}
    </div>
    <button className="btn btn-link" onClick={onStartEditing}>Rediger aktiviteter</button>
    </>
    }
  </>
);

const NoSelected = ({ onStartEditing }) => (
  <div>
      Vælg en eller flere personer, for at tildele point
  </div>
)

export default ActionContainer;
