import React from 'react';
import { cardStyles, mergeStyles } from '@/styles/utils';
import { theme } from '@/styles/theme';
import type { CSSProperties } from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'base' | 'compact' | 'spacious';
  hoverable?: boolean;
  bordered?: boolean;
  shadow?: 'sm' | 'md' | 'lg';
}

/**
 * Reusable Card component for consistent layout containers
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'base',
  hoverable = false,
  bordered = true,
  shadow = 'sm',
  style,
  className = '',
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const baseStyle = cardStyles.base;
  const variantStyle = variant !== 'base' ? cardStyles[variant] : {};
  const hoverStyle = hoverable && isHovered ? cardStyles.hover : {};
  
  const shadowStyle: CSSProperties = {
    boxShadow: theme.shadows[shadow],
  };
  
  const borderStyle: CSSProperties = bordered 
    ? {} 
    : { border: 'none' };

  const cardStyle = mergeStyles(
    baseStyle,
    variantStyle,
    shadowStyle,
    borderStyle,
    hoverStyle,
    style
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverable) setIsHovered(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverable) setIsHovered(false);
    onMouseLeave?.(e);
  };

  return (
    <div
      style={cardStyle}
      className={`card card--${variant} ${hoverable ? 'card--hoverable' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};
