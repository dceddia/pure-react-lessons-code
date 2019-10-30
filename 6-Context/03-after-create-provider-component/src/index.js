import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import UserContext, {
  UserProvider
} from './UserContext';
import './index.css';

function Root() {
  const { user } = useContext(UserContext);
  return user ? <MainPage /> : <LoginPage />;
}

ReactDOM.render(
  <UserProvider>
    <Root />
  </UserProvider>,
  document.querySelector('#root')
);
