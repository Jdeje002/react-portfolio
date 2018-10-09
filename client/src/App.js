import React, { Component } from "react";
import "./App.css";
import Navbar from "./Component/Navbar"
import Jumbotron from "./Component/Jumbotron"
class App extends Component {
  render() {
    return (
      <div className="App">
      <Jumbotron/>
        <Navbar />
      </div>
    );
  }
}

export default App;
