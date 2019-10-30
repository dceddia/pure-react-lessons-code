import React, { useState, useContext } from 'react';

const UserContext = React.createContext();
// UserContext.Provider
// UserContext.Consumer

export function UserProvider({ children }) {
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
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const { user } = useContext(UserContext);
  return user;
}

export function useUserActions() {
  const { login, logout } = useContext(UserContext);
  return { login, logout };
}
