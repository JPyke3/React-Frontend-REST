import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dbData: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios
      .get("http://localhost:5000/api/v1/todos")
      .then(response => {
        for (let i = 0; i < response.data.todos.length; i++) {
          const element = response.data.todos[i];
          this.setState({
            dbData: element,
          })
        }
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="button__container">
            <button className="button" onClick={this.handleClick}>
              Click Me
            </button>
            <p>{this.state.dbData.name}</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
