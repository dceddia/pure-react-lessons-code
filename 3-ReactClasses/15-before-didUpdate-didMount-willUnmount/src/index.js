import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 1. Mount
// 2. Render
// 3. Commit
// 4. Unmount

class Counter extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    console.log('[componentDidMount]', 'Mounted.');
    // fetch data, event listeners, DOM nodes
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[componentDidUpdate]', 'Updated.');
    // re-sync
  }

  componentWillUnmount() {
    console.log(
      '[componentWillUnmount]',
      'Goodbye cruel world.'
    );
    // cleanup - timers, subscriptions
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    console.log(
      '[render]',
      `count: ${this.state.count}`
    );

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
