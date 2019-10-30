import React, {
  useReducer,
  useEffect,
  useContext
} from 'react';
import { fetchEmails } from './api';

const EmailContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'begin':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'success':
      return {
        ...state,
        loading: false,
        emails: action.emails
      };
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case 'select_email':
      return {
        ...state,
        currentEmail: action.email
      };
    default:
      return state;
  }
}

export function EmailProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    emails: [],
    loading: false,
    error: null,
    currentEmail: null
  });

  // fetch emails
  useEffect(() => {
    dispatch({ type: 'begin' });
    fetchEmails()
      .then(emails =>
        dispatch({ type: 'success', emails })
      )
      .catch(error =>
        dispatch({ type: 'error', error })
      );
  }, []);

  const setCurrentEmail = email => {
    dispatch({ type: 'select_email', email });
  };

  const value = {
    ...state,
    setCurrentEmail
  };

  return (
    <EmailContext.Provider value={value}>
      {children}
    </EmailContext.Provider>
  );
}

export function useEmail() {
  return useContext(EmailContext);
}
