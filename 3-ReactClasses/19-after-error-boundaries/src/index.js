import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ErrorCatcher extends React.Component {
  state = {
    error: null
  };

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError');
    return { error };
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch');
    console.log('error', error);
    console.log('info', info);
  }

  render() {
    console.log('render');
    return this.state.error
      ? `Something went wrong ${this.props.id}`
      : this.props.children;
  }
}

class Breakable extends React.Component {
  state = {
    items: ['one', 'two', 'three']
  };

  breakIt = () => {
    this.setState({ items: undefined });
  };

  render() {
    return (
      <>
        {this.state.items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <button onClick={this.breakIt}>
          Break It
        </button>
      </>
    );
  }
}

ReactDOM.render(
  <ErrorCatcher id={1}>
    <Breakable />
    <ErrorCatcher id={2}>
      <Breakable />
    </ErrorCatcher>
  </ErrorCatcher>,
  document.querySelector('#root')
);
