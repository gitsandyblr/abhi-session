import React, { Component } from "react";
import "./App.css";

//components
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters } = this.state;

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
