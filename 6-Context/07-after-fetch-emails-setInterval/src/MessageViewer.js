import React from 'react';
import { useEmail } from './EmailContext';

const MessageViewer = () => {
  const { currentEmail, setCurrentEmail } = useEmail();

  return (
    <div className="MessageViewer">
      <button onClick={() => setCurrentEmail(null)}>
        Back
      </button>
      <h2>{currentEmail.subject}</h2>
      <div>{currentEmail.body}</div>
    </div>
  );
};

export default MessageViewer;
