import React, { Component } from "react";

class App extends Component {
  state = { counter: 0 };

  onIncremenet = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  onReset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncremenet}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <button onClick={this.onReset}>Reset</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;
