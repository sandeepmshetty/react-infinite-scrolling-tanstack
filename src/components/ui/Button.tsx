import React from 'react';
import { buttonStyles, mergeStyles } from '@/styles/utils';
import type { CSSProperties } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'base' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

/**
 * Reusable Button component with consistent styling and variants
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'base',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  style,
  className = '',
  ...props
}) => {
  const baseStyle = buttonStyles.base;
  const variantStyle = buttonStyles.variants[variant];
  const sizeStyle = size !== 'base' ? buttonStyles.sizes[size] : {};
  const disabledStyle = (disabled || isLoading) ? buttonStyles.disabled : {};
  
  const fullWidthStyle: CSSProperties = fullWidth ? { width: '100%' } : {};
  
  const buttonStyle = mergeStyles(
    baseStyle,
    variantStyle,
    sizeStyle,
    disabledStyle,
    fullWidthStyle,
    style
  );

  return (
    <button
      style={buttonStyle}
      disabled={disabled || isLoading}
      className={`button button--${variant} button--${size} ${className}`}
      {...props}
    >
      {isLoading && (
        <div 
          style={{
            width: '16px',
            height: '16px',
            border: '2px solid currentColor',
            borderTop: '2px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
      )}
      {!isLoading && leftIcon && leftIcon}
      {children}
      {!isLoading && rightIcon && rightIcon}
    </button>
  );
};
