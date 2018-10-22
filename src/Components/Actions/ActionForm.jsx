import React from "react";
import { GoChevronDown, GoChevronUp, GoTrashcan, GoPlus } from "react-icons/go";
import { newid } from "../../util";
import styles from "./ActionForm.module.scss";

class ActionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      actions: [...props.actions]
    };    
  }

  handleChange = (index, action) => {
    const actions = [...this.state.actions];
    actions[index] = action;
    this.setState({ actions });
  }

  handleMoveUp = index => {
    this.swap(index, index - 1);
  }

  handleMoveDown = index => {
    this.swap(index, index + 1);
  }

  handleDelete = index => {
    const actions = this.state.actions.filter((_, i) => index !== i);
    this.setState({ actions });
  }

  handleAdd = () => {
    const actions = [
      ...this.state.actions,
      { id: newid(), score: "0", name: "" }
    ];
    this.setState({ actions });
  }

  handleSubmit = event => {
    const actions = this.state.actions.map(action => ({
      id: action.id,
      score: Number(action.score),
      name: action.name
    }));
    this.props.onSaveActions(actions);
    this.props.onStopEditing();
  }

  swap = (a, b) => {
    const actions = [...this.state.actions];
    const valA = actions[a];
    const valB = actions[b];
    actions[a] = valB;
    actions[b] = valA;
    this.setState({ actions });
  }

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit} noValidate>
          <h2>Aktiviteter</h2>
          { this.state.actions.map((action, index) => 
            <ActionEditor 
              key={action.id} 
              index={index} 
              action={action} 
              first={index === 0} 
              last={this.state.actions.length === index + 1} 
              onChange={this.handleChange}
              onMoveUp={() => this.handleMoveUp(index)}
              onMoveDown={() => this.handleMoveDown(index)}
              onDelete={() => this.handleDelete(index)}
            />) 
          }
          <button className="btn btn-link" type="button" onClick={this.handleAdd}><GoPlus />tilføj</button>
          <br />
          <button className="btn btn-primary" type="submit">Gem</button>
          <button className="btn btn-link" type="button" onClick={this.props.onStopEditing}>annullér</button>
        </form>
      </div>
    );
  }
}

const ActionEditor = (props) => (
  <div className="form-row">
    <div className="form-group">
      <input 
        id={`score[${props.index}]`}
        name="score"
        type="number" 
        className={`form-control form-control-sm ${styles.score} ${validateScore(props.action.score) || "is-invalid"}`} 
        onChange={event => handleChange(event, props)}
        value={props.action.score} 
        required
      />
    </div>
    <div className="form-group">
      <input 
        id={`name[${props.index}]`}
        name="name"
        type="text" 
        className={`form-control form-control-sm ${styles.name} ${validateName(props.action.name) || "is-invalid"}`}
        value={props.action.name} 
        onChange={event => handleChange(event, props)}
        required
      />
    </div>
    <div className={styles.chevron}>
      <GoChevronUp className={props.first && styles.hide} onClick={props.onMoveUp} />
      <GoChevronDown className={props.last && styles.hide} onClick={props.onMoveDown} />
    </div>
    <div className={styles.trash}>
      <GoTrashcan onClick={props.onDelete} />
    </div>
  </div>
)

const handleChange = (event, props) => {
  const target = event.currentTarget;
  props.onChange(
    props.index,
    {
      ...props.action,
      [target.name]: target.value
    }
  );
}

const validateScore = (score) => {
  return score > 0 || score < 0;
}

const validateName = (name) => {
  return name && name.trim().length > 0;
}

export default ActionForm;