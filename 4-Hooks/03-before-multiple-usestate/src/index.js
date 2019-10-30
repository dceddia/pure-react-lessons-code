import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div>
      <h1>Coffee Maker</h1>
      <span aria-hidden>☕</span>
      <h2>Water</h2>
      <h2>Coffee</h2>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
