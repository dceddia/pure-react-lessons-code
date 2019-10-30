import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Demo = () => {
  const [count, setCount] = useState(0);

  console.log('[Demo] render');

  return (
    <div>
      {count}
      <br />
      <Button onClick={() => setCount(count + 1)} />
    </div>
  );
};

const Button = ({ onClick }) => {
  console.log('[Button] render');

  return <button onClick={onClick}>Click Me</button>;
};

ReactDOM.render(
  <Demo />,
  document.querySelector('#root')
);
