import React, {
  useState,
  useEffect,
  useContext
} from 'react';
import { fetchEmails } from './api';

const EmailContext = React.createContext();

export function EmailProvider({ children }) {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentEmail, setCurrentEmail] = useState(
    null
  );

  // fetch emails
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchEmails()
      .then(emails => setEmails(emails))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const value = {
    emails,
    loading,
    error,
    currentEmail,
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
