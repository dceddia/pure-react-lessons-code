import React, { useState, useContext } from 'react';
import * as API from './api';
import UserContext from './UserContext';

function LoginPage() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login: onLogin } = useContext(UserContext);

  const submit = event => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    API.login(username, password)
      .then(user => {
        setLoading(false);
        onLogin(user);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div className="LoginPage">
      <form onSubmit={submit}>
        <label>
          Username
          <input
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        {error && (
          <div className="error">{error.message}</div>
        )}
        <button type="submit" disabled={loading}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
