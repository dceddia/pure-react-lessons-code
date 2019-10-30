import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Counter = () => (
  <div className="counter">
    <h2>Counter</h2>
    <div>
      <button>-</button>
      <span className="count">0</span>
      <button>+</button>
    </div>
  </div>
);

ReactDOM.render(
  <Counter />,
  document.querySelector('#root')
);
