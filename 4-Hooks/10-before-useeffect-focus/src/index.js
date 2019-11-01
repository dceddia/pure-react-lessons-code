import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const LoginForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input ref={usernameRef} id="username" />

      <label htmlFor="password">Password</label>
      <input
        ref={passwordRef}
        id="password"
        type="password"
      />

      <button type="submit">Log In</button>
    </form>
  );
};

ReactDOM.render(
  <LoginForm />,
  document.querySelector('#root')
);
