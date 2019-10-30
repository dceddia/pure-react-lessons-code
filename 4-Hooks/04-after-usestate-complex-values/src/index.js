import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [brew, setBrew] = useState({
    water: 8,
    coffee: 13
  });

  const setWater = () => {
    // Don't do this -- React won't re-render:
    //    brew.water += 1;
    //    setBrew(brew);

    // Update values immutably instead, by
    // passing a whole new object:
    setBrew({
      water: brew.water + 1,
      coffee: brew.coffee
    });
  };

  const setCoffee = () => {
    setBrew(brew => {
      return {
        water: brew.water,
        coffee: brew.coffee + 1
      };
    });
  };

  return (
    <div>
      <h1>Coffee Maker</h1>
      <span aria-hidden>☕</span>
      <h2>Water</h2>
      <button onClick={setWater}>
        {brew.water} oz
      </button>
      <h2>Coffee</h2>
      <button onClick={setCoffee}>
        {brew.coffee} g
      </button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
