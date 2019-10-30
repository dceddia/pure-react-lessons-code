import React, {
  useRef,
  useState,
  useEffect
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    setError(null);
    setTimeout(() => {
      if (usernameRef.current.value !== 'dave') {
        setError({
          field: usernameRef.current,
          message: 'Invalid username'
        });
      } else if (
        passwordRef.current.value !== 'pass'
      ) {
        setError({
          field: passwordRef.current,
          message: 'Wrong password'
        });
      } else {
        setUsername('');
        setPassword('');
      }
    }, 500);
  };

  useEffect(() => {
    if (error) {
      error.field.focus();
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="error">{error.message}</div>
      )}
      <label htmlFor="username">Username</label>
      <input
        ref={usernameRef}
        id="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        ref={passwordRef}
        value={password}
        onChange={e => setPassword(e.target.value)}
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
