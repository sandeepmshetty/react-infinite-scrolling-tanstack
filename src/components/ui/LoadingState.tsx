import React from 'react';
import { Loading } from '@/components/ui';
import { theme } from '@/styles/theme';
import { VIRTUALIZATION_CONFIG } from '@/config';

/**
 * Loading state component with consistent styling
 */
export const LoadingState: React.FC = () => {
  return (
    <Loading
      message="Loading posts..."
      style={{
        height: `${VIRTUALIZATION_CONFIG.LIST_HEIGHT}px`,
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: theme.colors.background.primary,
        borderRadius: theme.borderRadius.base,
        border: `1px solid ${theme.colors.border.light}`,
      }}
    />
  );
};
