import React from 'react';
import { UserProvider } from './UserContext';
import { EmailProvider } from './EmailContext';
import { NotifyProvider } from './NotifyContext';

export default function Providers({ children }) {
  return (
    <NotifyProvider>
      <UserProvider>
        <EmailProvider>{children}</EmailProvider>
      </UserProvider>
    </NotifyProvider>
  );
}
