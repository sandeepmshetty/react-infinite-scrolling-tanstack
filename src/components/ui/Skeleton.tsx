import React from 'react';
import { theme } from '@/styles/theme';
import { animations } from '@/styles/utils';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Reusable Skeleton component for loading states
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  borderRadius = theme.borderRadius.base,
  className = '',
  style,
}) => {
  const skeletonStyle: React.CSSProperties = {
    width,
    height,
    borderRadius,
    backgroundColor: theme.colors.neutral[200],
    ...animations.pulse,
    ...style,
  };

  return (
    <div
      className={`skeleton ${className}`}
      style={skeletonStyle}
      aria-hidden="true"
    />
  );
};
