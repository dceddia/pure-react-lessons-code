import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { useUser } from './UserContext';
import Providers from './Providers';
import './index.css';

function Root() {
  const user = useUser();
  return user ? <MainPage /> : <LoginPage />;
}

ReactDOM.render(
  <Providers>
    <Root />
  </Providers>,
  document.querySelector('#root')
);
