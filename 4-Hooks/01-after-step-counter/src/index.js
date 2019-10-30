import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const StepCounter = () => {
  const [steps, setSteps] = useState(100);
  return (
    <main>
      <span aria-hidden>👟</span>
      <div>
        You've walked {steps} steps so far today.
      </div>
      <button onClick={() => setSteps(steps + 1)}>
        Record a Step
      </button>
    </main>
  );
};

ReactDOM.render(
  <StepCounter />,
  document.querySelector('#root')
);
