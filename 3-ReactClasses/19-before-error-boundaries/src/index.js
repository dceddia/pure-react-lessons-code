import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
  <Breakable />,
  document.querySelector('#root')
);
