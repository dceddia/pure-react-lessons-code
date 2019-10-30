import React, {
  useReducer,
  useEffect,
  useContext
} from 'react';
import { fetchEmails, fetchLatestEmails } from './api';
import { useUser } from './UserContext';
import { useNotify } from './NotifyContext';

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
    case 'add_emails':
      return {
        ...state,
        emails: [...state.emails, ...action.emails]
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
  const user = useUser();
  const { addMessage } = useNotify();

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

  useEffect(() => {
    const refresh = () => {
      if (!state.loading) {
        fetchLatestEmails().then(emails => {
          if (emails.length > 0) {
            dispatch({ type: 'add_emails', emails });
            // notify!
            addMessage(
              `${emails.length} email${
                emails.length === 1 ? '' : 's'
              } arrived`
            );
          }
        });
      }
    };

    let timer;
    if (user) {
      timer = setInterval(refresh, 3000);
    }

    return () => clearInterval(timer);
  });

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
