import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 1
    });
    console.log(this.state);
  }

  decrement() {
    this.setState(previousState => {
      return {
        count: previousState.count - 1
      };
    });
    this.setState(previousState => {
      return {
        count: previousState.count - 1
      };
    });
    this.setState(
      prev => ({
        count: prev.count - 1
      }),
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">
            {this.state.count}
          </span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.querySelector('#root')
);
