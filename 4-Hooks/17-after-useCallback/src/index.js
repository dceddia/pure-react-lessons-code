import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';

const Demo = () => {
  const [count, setCount] = useState(0);

  console.log('[Demo] render');

  const increment = useCallback(
    () => setCount(oldCount => oldCount + 1),
    []
  );

  return (
    <div>
      {count}
      <br />
      <Button onClick={increment} />
    </div>
  );
};

const Button = React.memo(({ onClick }) => {
  console.log('[Button] render');

  return <button onClick={onClick}>Click Me</button>;
});

ReactDOM.render(
  <Demo />,
  document.querySelector('#root')
);
