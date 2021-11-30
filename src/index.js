import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { top: 0 };
  }

  componentDidMount() {
    let test = document.getElementById("test");
    this.setState({
      top: this.offset(test).top
    });
  }

  offset = element => {
    let top = 0;
    let left = 0;
    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);

    return {
      top: top,
      left: left
    };
  };

  render() {
    return (
      <div className="App" id="test">
        <h1>Page Starts At: {this.state.top}</h1>
        <h2>innerHeight: {window.innerHeight}</h2>
        <h2>outerHeight: {window.outerHeight}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
