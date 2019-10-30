import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const StepCounter = () => {
  return (
    <main>
      <span aria-hidden>👟</span>
      <div>You've walked 0 steps so far today.</div>
      <button>Record a Step</button>
    </main>
  );
};

ReactDOM.render(
  <StepCounter />,
  document.querySelector('#root')
);
