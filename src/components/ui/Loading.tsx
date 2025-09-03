import React from 'react';
import { theme } from '@/styles/theme';
import { mergeStyles, layoutStyles } from '@/styles/utils';
import type { CSSProperties } from 'react';

export interface SpinnerProps {
  size?: 'sm' | 'base' | 'lg';
  color?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Reusable Spinner component for loading states
 */
export const Spinner: React.FC<SpinnerProps> = ({
  size = 'base',
  color = theme.colors.primary[500],
  className = '',
  style,
}) => {
  const sizes = {
    sm: '16px',
    base: '24px',
    lg: '32px',
  };

  const spinnerStyle: CSSProperties = {
    width: sizes[size],
    height: sizes[size],
    border: '2px solid transparent',
    borderTop: `2px solid ${color}`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  const finalStyle = mergeStyles(spinnerStyle, style);

  return (
    <div
      className={`spinner spinner--${size} ${className}`}
      style={finalStyle}
      role="status"
      aria-label="Loading"
    />
  );
};

export interface LoadingProps {
  message?: string;
  showSpinner?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * Loading component with spinner and optional message
 */
export const Loading: React.FC<LoadingProps> = ({
  message = 'Loading...',
  showSpinner = true,
  className = '',
  style,
}) => {
  const loadingStyle = mergeStyles(
    layoutStyles.center,
    layoutStyles.stack(3),
    {
      padding: theme.spacing[8],
      color: theme.colors.text.secondary,
      fontSize: theme.typography.fontSize.base,
    },
    style
  );

  return (
    <div
      className={`loading ${className}`}
      style={loadingStyle}
      role="status"
      aria-live="polite"
    >
      {showSpinner && <Spinner />}
      {message && <span>{message}</span>}
    </div>
  );
};
