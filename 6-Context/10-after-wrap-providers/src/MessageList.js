import React from 'react';
import { useUser } from './UserContext';
import { useEmail } from './EmailContext';

const MessageList = () => {
  const user = useUser();
  const {
    emails,
    loading,
    error,
    setCurrentEmail
  } = useEmail();

  return (
    <div className="MessageList">
      {error ? (
        <div className="no-messages">Error!</div>
      ) : loading ? (
        <div className="no-messages">Loading...</div>
      ) : emails.length === 0 ? (
        <div className="no-messages">
          Your mailbox is empty, {user.firstName}! 🎉
        </div>
      ) : (
        <ul>
          {emails.map(email => (
            <Email
              key={email.id}
              email={email}
              onClick={() => setCurrentEmail(email)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

const Email = ({ email, onClick }) => (
  <li onClick={onClick}>
    <div className="subject">{email.subject}</div>
    <div className="preview">{email.preview}</div>
  </li>
);

export default MessageList;
