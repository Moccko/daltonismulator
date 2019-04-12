import React, { Component } from "react";
import logo from "./logo.svg";
import eye from "./eye.svg";
import "./App.css";
import Eye from "./Eye";
import ReactCursorPosition from "react-cursor-position";

class App extends Component {
  state = {
    size: 250
  };

  render() {
    return (
      <div className="App">
        <ReactCursorPosition className="App-header">
          <Eye img={eye} size={this.state.size} />
        </ReactCursorPosition>
      </div>
    );
  }
}

export default App;
