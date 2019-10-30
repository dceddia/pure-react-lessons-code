import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 25
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
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
// const Counter = () => (
//   <div className="counter">
//     <h2>Counter</h2>
//     <div>
//       <button>-</button>
//       <span className="count">0</span>
//       <button>+</button>
//     </div>
//   </div>
// );

ReactDOM.render(
  <Counter />,
  document.querySelector('#root')
);
