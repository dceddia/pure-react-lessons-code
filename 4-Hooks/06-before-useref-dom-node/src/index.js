import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const LoginForm = () => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" />

      <label htmlFor="password">Password</label>
      <input id="password" type="password" />

      <button type="submit">Log In</button>
    </form>
  );
};

ReactDOM.render(
  <LoginForm />,
  document.querySelector('#root')
);
