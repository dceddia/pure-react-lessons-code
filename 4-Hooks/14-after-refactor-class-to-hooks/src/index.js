import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Counter() {
  const [count, setCount] = useState(99);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Counter />,
  document.querySelector('#root')
);
