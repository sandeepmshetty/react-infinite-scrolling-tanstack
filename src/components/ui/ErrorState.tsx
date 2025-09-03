import React from 'react';
import { Card, Text, Button } from '@/components/ui';
import { theme } from '@/styles/theme';
import { layoutStyles, mergeStyles } from '@/styles/utils';
import { VIRTUALIZATION_CONFIG } from '@/config';
import type { ErrorStateProps } from '@/types';

/**
 * Enhanced Error state component with consistent styling and retry functionality
 */
export const ErrorState: React.FC<ErrorStateProps> = ({ 
  message, 
  onRetry,
}) => {
  return (
    <div
      style={mergeStyles(
        layoutStyles.center,
        {
          height: `${VIRTUALIZATION_CONFIG.LIST_HEIGHT}px`,
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: theme.colors.background.secondary,
          borderRadius: theme.borderRadius.base,
          border: `1px solid ${theme.colors.border.light}`,
        }
      )}
    >
      <Card variant="compact" style={{ textAlign: 'center', maxWidth: '400px' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            margin: '0 auto',
            marginBottom: theme.spacing[4],
            borderRadius: '50%',
            backgroundColor: theme.colors.semantic.error,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.colors.text.inverse,
            fontSize: '20px',
          }}
        >
          ⚠️
        </div>

        <Text as="h3" size="lg" weight="semibold" align="center" style={{ marginBottom: theme.spacing[3] }}>
          Unable to Load Posts
        </Text>

        <Text color="secondary" align="center" style={{ marginBottom: theme.spacing[5] }}>
          {message || 'Something went wrong while loading the posts. Please try again.'}
        </Text>

        {onRetry && (
          <Button
            variant="primary"
            onClick={onRetry}
            style={{ margin: '0 auto' }}
          >
            Try Again
          </Button>
        )}
      </Card>
    </div>
  );
};
