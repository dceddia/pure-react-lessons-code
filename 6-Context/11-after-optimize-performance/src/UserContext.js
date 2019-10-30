import React, {
  useState,
  useContext,
  useMemo,
  useCallback
} from 'react';
import { FAKE_USER } from './api';

const UserContext = React.createContext();
// UserContext.Provider
// UserContext.Consumer

export function UserProvider({ children }) {
  const [user, setUser] = useState(FAKE_USER);

  const login = useCallback(user => setUser(user), []);
  const logout = useCallback(() => setUser(null), []);

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user, login, logout]
  );

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
