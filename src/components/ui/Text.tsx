import React from 'react';
import { textStyles, mergeStyles } from '@/styles/utils';
import type { CSSProperties } from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  variant?: 'heading' | 'body';
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'muted' | 'subtle';
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
}

/**
 * Reusable Text component for consistent typography
 */
export const Text: React.FC<TextProps> = ({
  children,
  as = 'p',
  variant = 'body',
  size,
  weight,
  color,
  align = 'left',
  truncate = false,
  style,
  className = '',
  ...props
}) => {
  const Component = as;
  
  // Get base styles based on component type and variant
  const getBaseStyle = (): CSSProperties => {
    if (variant === 'heading') {
      switch (as) {
        case 'h1': return textStyles.heading.h1;
        case 'h2': return textStyles.heading.h2;
        case 'h3': return textStyles.heading.h3;
        default: return textStyles.heading.h2;
      }
    }
    return textStyles.body.base;
  };

  const baseStyle = getBaseStyle();
  
  // Size overrides
  const sizeStyle: CSSProperties = size ? {
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
    }[size]
  } : {};
  
  // Weight overrides
  const weightStyle: CSSProperties = weight ? {
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }[weight]
  } : {};
  
  // Color overrides
  const colorStyle: CSSProperties = (() => {
    if (!color) return {};
    
    switch (color) {
      case 'primary': return { color: '#111827' };
      case 'secondary': return { color: '#4b5563' };
      case 'tertiary': return { color: '#9ca3af' };
      case 'inverse': return textStyles.variants.inverse;
      case 'muted': return textStyles.variants.muted;
      case 'subtle': return textStyles.variants.subtle;
      default: return {};
    }
  })();
  
  // Alignment
  const alignStyle: CSSProperties = {
    textAlign: align,
  };
  
  // Truncate
  const truncateStyle: CSSProperties = truncate ? {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  } : {};

  const finalStyle = mergeStyles(
    baseStyle,
    sizeStyle,
    weightStyle,
    colorStyle,
    alignStyle,
    truncateStyle,
    style
  );

  return (
    <Component
      style={finalStyle}
      className={`text text--${variant} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
