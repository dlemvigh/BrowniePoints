import React, { Component } from 'react';
import ActionContainer from "./Components/Actions/ActionContainer";
import ActionForm from "./Components/Actions/ActionForm";
import User from "./Components/User";

import styles from "./App.module.scss";
import './customization.scss';

const defaultActions = [
  {
    name: "Opvask",
    score: 10
  },
  {
    name: "Læs bog",
    score: 5
  },
  {
    name: "Skrald",
    score: 10
  },
  {
    name: "Tivoli",
    score: -200
  }
]

const defaultUsers = {
  Tine: {
    score: 0,
    color: "#F05D5E"
  },
  Anders: {
    score: 0,
    color: "#1A964E"
  },
  Daniel: {
    score: 0,
    color: "#85C7F2"
  }
};

class AppContainer extends Component {
  constructor() {
    super();
    const actions = JSON.parse(localStorage.getItem("actions"));
    const users = JSON.parse(localStorage.getItem("users"));
    this.state = {
      actions: actions || defaultActions,
      users: users || defaultUsers,
      selected: {},
      editing: false
    }
  }

  handleAddScore = (score) => {
    const newUsers = { ...this.state.users };
    const users = Object.keys(this.state.selected);
    users.forEach(user => {
      const selected = this.state.selected[user];
      if (selected) {
        const newUser = { ...newUsers[user] };
        newUser.score += score;
        newUsers[user] = newUser;
      }
    });
    this.setState({
      users: newUsers
    });
    localStorage.setItem("users", JSON.stringify(newUsers));
  }

  handleSaveActions = (actions) => {
    this.setState({ actions });
    localStorage.setItem("actions", JSON.stringify(actions));
  }

  handleSelect = (user) => {
    const newSelected = { ...this.state.selected }
    newSelected[user] = !newSelected[user];
    this.setState({
      selected: newSelected
    });
  }
  
  handleStartEditing = () => {
    this.setState({ editing: true });
  }

  handleStopEditing = () => {
    this.setState({ editing: false });
  }

  render() {
    return <App {...this} {...this.state}  />;
  }

}

const App = (props) => {
  const users = Object.keys(props.users)
  const hasSelected = users.some(user => props.selected[user]);
  if (props.editing) {
    return (
      <>
        <div className={styles.main}>
          <ActionForm actions={props.actions} onSaveActions={props.handleSaveActions} onStopEditing={props.handleStopEditing} />
        </div>
        <div className={styles.aside}>
        </div>
      </>
    )
  } else {
    return (
      <>      
        <div className={styles.main}>
          {users.map(user =>
            <User
              key={user}
              name={user}
              {... props.users[user]}
              isSelected={props.selected[user]}
              onSelect={props.handleSelect}
            />
          )}
        </div>
        <div className={styles.aside}>
          <ActionContainer hasSelected={hasSelected} actions={props.actions} onAddScore={props.handleAddScore} onStartEditing={props.handleStartEditing} />
        </div>
      </>
    );
  }
}

export default AppContainer;
