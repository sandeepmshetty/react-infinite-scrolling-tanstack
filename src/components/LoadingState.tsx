import React from 'react';

const loadingStyles = {
  initial: {
    height: '700px', // Match total height
    display: 'flex' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    fontSize: '18px',
    width: '100%',
  },
};

export const LoadingState: React.FC = () => (
  <div style={loadingStyles.initial}>
    Loading posts...
  </div>
);
