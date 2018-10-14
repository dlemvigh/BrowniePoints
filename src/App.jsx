import React, { Component } from 'react';
import Person from "./Components/Person";
import './customization.scss';

const users = ["Tine", "Anders", "Daniel"]

const actions = [
  { name: "Opvask", score: 10 },
  { name: "Læs bog", score: 5},
  { name: "Skrald", score: 10 }
]

class App extends Component {
  constructor() {
    super();
    const scores = JSON.parse( localStorage.getItem("score") );
    this.state = {
      scores: scores ||   {
        Tine: 291,
        Anders: 116,
        Daniel: -19
      },
      users: {
        Tine: {
          isActive: true,
          color: "orange",
        },
        Anders: {
          color: "purple"
        },
        Daniel: {
          color: "teal"
        }
      }
    }
  }

  handleAddScore = (user, score) => {
    const newScore =  { ...this.state.scores };
    newScore[user] += score;
    this.setState({
      scores: newScore
    });
    localStorage.setItem("score", JSON.stringify(newScore));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { users.map(user =>
            <Person key={user} user={this.state.users[user]} name={user} score={this.state.scores[user]} actions={actions} onAddScore={this.handleAddScore} />  
          )}
        </header>
      </div>
    );
  }
}

export default App;
