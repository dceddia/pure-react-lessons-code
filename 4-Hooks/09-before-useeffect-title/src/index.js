import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const UpdateTitle = () => {
  const [name, setName] = useState('');

  return (
    <main>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </main>
  );
};

ReactDOM.render(
  <UpdateTitle />,
  document.querySelector('#root')
);
