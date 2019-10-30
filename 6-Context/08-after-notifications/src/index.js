import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider, useUser } from './UserContext';
import { EmailProvider } from './EmailContext';
import { NotifyProvider } from './NotifyContext';
import './index.css';

function Root() {
  const user = useUser();
  return user ? <MainPage /> : <LoginPage />;
}

ReactDOM.render(
  <NotifyProvider>
    <UserProvider>
      <EmailProvider>
        <Root />
      </EmailProvider>
    </UserProvider>
  </NotifyProvider>,
  document.querySelector('#root')
);
