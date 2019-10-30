import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function useCoffeeMaker(water, coffee) {
  const [brew, setBrew] = useState({
    coffee,
    water
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

  return {
    water: brew.water,
    coffee: brew.coffee,
    addWater,
    addCoffee
  };
}

// The call chain looks like:
// App
//   useCoffeeMaker
//     useState

function App() {
  const { water, coffee, addWater, addCoffee } = useCoffeeMaker(10, 26);

  return (
    <div>
      <h1>Coffee Maker</h1>
      <span aria-hidden>☕</span>
      <h2>Water</h2>
      <button onClick={addWater}>{water} oz</button>
      <h2>Coffee</h2>
      <button onClick={addCoffee}>{coffee} g</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
