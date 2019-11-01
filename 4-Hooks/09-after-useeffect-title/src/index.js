import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const UpdateTitle = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    document.title = `Hi ${name}`;
    console.log('new title', name);
  }, [name]);

  console.log('render!');

  return (
    <main>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="number">number</label>
      <input
        id="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
    </main>
  );
};

ReactDOM.render(
  <UpdateTitle />,
  document.querySelector('#root')
);
