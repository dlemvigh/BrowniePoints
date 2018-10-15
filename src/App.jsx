import React, { Component } from 'react';
import User from "./Components/User";
import Action from "./Components/Action";

import './App.css';
// import Person from "./Components/Person";
import './customization.scss';

const actions = [
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
    name: "Test",
    score: 1
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

class App extends Component {
  constructor() {
    super();
    const users = JSON.parse(localStorage.getItem("users"));
    this.state = {
      users: users || defaultUsers,
      selected: {}
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

  handleSelect = (user) => {
    const newSelected = { ...this.state.selected }
    newSelected[user] = !newSelected[user];
    this.setState({
      selected: newSelected
    });
  }

  render() {
    const users = Object.keys(this.state.users)
    const hasSelected = users.some(user => this.state.selected[user]);
    return (
      <div className="App">
        <header className="App-header">
          {users.map(user =>
            <User
              key={user}
              name={user}
              {... this.state.users[user]}
              isSelected={this.state.selected[user]}
              onSelect={this.handleSelect}
            />
          )}
          {hasSelected && actions.map(action =>
            <Action key={action.name} {...action} onAddScore={this.handleAddScore} />
          )}
        </header>
      </div>
    );
  }
}

export default App;
