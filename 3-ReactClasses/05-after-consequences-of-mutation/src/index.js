import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  state = {
    wrap: {
      count: 0,
      lit: true
    }
  };

  increment = () => {
    // DON'T DO THIS:
    this.state.wrap.count += 1;
    this.setState(this.state);

    // DO THIS INSTEAD:
    // this.setState({
    //   wrap: {
    //     ...this.state.wrap,
    //     count: this.state.wrap.count + 1
    //   }
    // });
  };

  decrement = () => {
    this.setState({
      wrap: {
        ...this.state.wrap,
        count: this.state.wrap.count - 1
      }
    });
  };

  toggle = () => {
    this.setState(prev => {
      // DON'T DO THIS:
      prev.wrap.lit = !prev.wrap.lit;
      return prev;

      // DO THIS INSTEAD:
      // return {
      //   wrap: {
      //     ...prev.wrap,
      //     lit: !prev.wrap.lit
      //   }
      // }
    });
  };

  render() {
    const { lit, count } = this.state.wrap;

    return (
      <div className={`counter ${lit ? '' : 'dark'}`}>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button onClick={this.toggle}>
          Light/Dark
        </button>
        <Status wrap={this.state.wrap} />
      </div>
    );
  }
}

class Status extends React.PureComponent {
  render() {
    const { count, lit } = this.props.wrap;

    return (
      <div>
        {count} {lit ? 'true' : 'false'}
      </div>
    );
  }
}
ReactDOM.render(
  <Counter />,
  document.querySelector('#root')
);
