import React from 'react';
import type { ErrorStateProps } from '@/types';

const errorStyles = {
  container: {
    display: 'flex' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    height: '700px', // Match total height
    color: 'red',
    fontSize: '16px',
    width: '100%',
  },
};

export const ErrorState: React.FC<ErrorStateProps> = ({ message }) => (
  <div style={errorStyles.container}>
    Error loading posts: {message}
  </div>
);
