import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [brew, setBrew] = useState({
    coffee: 13,
    water: 8
  });

  const addWater = () => {
    setBrew(brew => ({
      ...brew,
      water: brew.water + 1
    }));
  };

  const addCoffee = () => {
    setBrew(brew => ({
      ...brew,
      coffee: brew.coffee + 1
    }));
  };

  return (
    <div>
      <h1>Coffee Maker</h1>
      <span aria-hidden>☕</span>
      <h2>Water</h2>
      <button onClick={addWater}>
        {brew.water} oz
      </button>
      <h2>Coffee</h2>
      <button onClick={addCoffee}>
        {brew.coffee} g
      </button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
