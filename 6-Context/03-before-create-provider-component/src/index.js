import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import UserContext from './UserContext';
import './index.css';

function Root() {
  const [user, setUser] = useState(null);

  const login = user => setUser(user);
  const logout = () => setUser(null);

  const value = {
    user,
    login,
    logout
  };

  return (
    <UserContext.Provider value={value}>
      {user ? <MainPage /> : <LoginPage />}
    </UserContext.Provider>
  );
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
