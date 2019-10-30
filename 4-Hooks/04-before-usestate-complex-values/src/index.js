import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [coffee, setGramsCoffee] = useState(13);
  const [water, setOuncesWater] = useState(8);

  return (
    <div>
      <h1>Coffee Maker</h1>
      <span aria-hidden>☕</span>
      <h2>Water</h2>
      <button
        onClick={() => setOuncesWater(water + 1)}
      >
        {water} oz
      </button>
      <h2>Coffee</h2>
      <button
        onClick={() => setGramsCoffee(coffee + 1)}
      >
        {coffee} g
      </button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
