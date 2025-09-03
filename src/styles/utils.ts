import { theme } from './theme';
import type { CSSProperties } from 'react';

/**
 * Style utility functions for consistent styling across components
 */

// Type for CSS properties with theme values
export type StyleProps = CSSProperties;

/**
 * Container styles with consistent spacing and layout
 */
export const containerStyles = {
  base: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `0 ${theme.spacing[4]}`,
    boxSizing: 'border-box' as const,
  },
  
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  
  flex: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: theme.spacing[4],
  },
  
  grid: {
    display: 'grid',
    gap: theme.spacing[4],
  },
} as const;

/**
 * Card styles for consistent card components
 */
export const cardStyles = {
  base: {
    backgroundColor: theme.colors.background.primary,
    border: `1px solid ${theme.colors.border.light}`,
    borderRadius: theme.borderRadius.base,
    boxShadow: theme.shadows.sm,
    padding: theme.spacing[4],
    transition: theme.transitions.base,
  },
  
  hover: {
    boxShadow: theme.shadows.md,
    transform: 'translateY(-2px)',
  },
  
  compact: {
    padding: theme.spacing[3],
  },
  
  spacious: {
    padding: theme.spacing[6],
  },
} as const;

/**
 * Button styles with variants
 */
export const buttonStyles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing[2],
    padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
    borderRadius: theme.borderRadius.base,
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.sans,
    border: 'none',
    cursor: 'pointer',
    transition: theme.transitions.base,
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
    outline: 'none',
  },
  
  variants: {
    primary: {
      backgroundColor: theme.colors.primary[500],
      color: theme.colors.text.inverse,
      '&:hover': {
        backgroundColor: theme.colors.primary[600],
      },
      '&:focus': {
        boxShadow: `0 0 0 3px ${theme.colors.primary[200]}`,
      },
    },
    
    secondary: {
      backgroundColor: theme.colors.neutral[100],
      color: theme.colors.text.primary,
      border: `1px solid ${theme.colors.border.medium}`,
      '&:hover': {
        backgroundColor: theme.colors.neutral[200],
      },
    },
    
    danger: {
      backgroundColor: theme.colors.semantic.error,
      color: theme.colors.text.inverse,
      '&:hover': {
        backgroundColor: '#dc2626',
      },
    },
    
    ghost: {
      backgroundColor: 'transparent',
      color: theme.colors.text.secondary,
      '&:hover': {
        backgroundColor: theme.colors.neutral[100],
      },
    },
  },
  
  sizes: {
    sm: {
      padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
      fontSize: theme.typography.fontSize.sm,
    },
    
    lg: {
      padding: `${theme.spacing[4]} ${theme.spacing[6]}`,
      fontSize: theme.typography.fontSize.lg,
    },
  },
  
  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
    pointerEvents: 'none' as const,
  },
} as const;

/**
 * Text styles for consistent typography
 */
export const textStyles = {
  heading: {
    h1: {
      fontSize: theme.typography.fontSize['4xl'],
      fontWeight: theme.typography.fontWeight.bold,
      lineHeight: theme.typography.lineHeight.tight,
      color: theme.colors.text.primary,
      margin: `0 0 ${theme.spacing[6]} 0`,
    },
    
    h2: {
      fontSize: theme.typography.fontSize['3xl'],
      fontWeight: theme.typography.fontWeight.semibold,
      lineHeight: theme.typography.lineHeight.tight,
      color: theme.colors.text.primary,
      margin: `0 0 ${theme.spacing[4]} 0`,
    },
    
    h3: {
      fontSize: theme.typography.fontSize['2xl'],
      fontWeight: theme.typography.fontWeight.semibold,
      lineHeight: theme.typography.lineHeight.tight,
      color: theme.colors.text.primary,
      margin: `0 0 ${theme.spacing[3]} 0`,
    },
  },
  
  body: {
    base: {
      fontSize: theme.typography.fontSize.base,
      fontWeight: theme.typography.fontWeight.normal,
      lineHeight: theme.typography.lineHeight.normal,
      color: theme.colors.text.primary,
      margin: `0 0 ${theme.spacing[4]} 0`,
    },
    
    small: {
      fontSize: theme.typography.fontSize.sm,
      color: theme.colors.text.secondary,
    },
    
    large: {
      fontSize: theme.typography.fontSize.lg,
      lineHeight: theme.typography.lineHeight.relaxed,
    },
  },
  
  variants: {
    muted: {
      color: theme.colors.text.secondary,
    },
    
    subtle: {
      color: theme.colors.text.tertiary,
    },
    
    inverse: {
      color: theme.colors.text.inverse,
    },
  },
} as const;

/**
 * Layout utilities
 */
export const layoutStyles = {
  stack: (gap: keyof typeof theme.spacing = 4) => ({
    display: 'flex',
    flexDirection: 'column' as const,
    gap: theme.spacing[gap],
  }),
  
  inline: (gap: keyof typeof theme.spacing = 3) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing[gap],
  }),
  
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
} as const;

/**
 * State styles for interactive elements
 */
export const stateStyles = {
  loading: {
    opacity: 0.6,
    pointerEvents: 'none' as const,
    cursor: 'wait',
  },
  
  disabled: {
    opacity: 0.5,
    pointerEvents: 'none' as const,
    cursor: 'not-allowed',
  },
  
  error: {
    borderColor: theme.colors.semantic.error,
    color: theme.colors.semantic.error,
  },
  
  success: {
    borderColor: theme.colors.semantic.success,
    color: theme.colors.semantic.success,
  },
} as const;

/**
 * Animation utilities
 */
export const animations = {
  fadeIn: {
    opacity: 0,
    animation: 'fadeIn 0.3s ease-in-out forwards',
  },
  
  slideUp: {
    transform: 'translateY(10px)',
    opacity: 0,
    animation: 'slideUp 0.3s ease-out forwards',
  },
  
  pulse: {
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
  
  spin: {
    animation: 'spin 1s linear infinite',
  },
} as const;

/**
 * Helper function to merge styles
 */
export const mergeStyles = (...styles: (StyleProps | undefined)[]): StyleProps => {
  return styles.filter(Boolean).reduce<StyleProps>((acc, style) => ({ ...acc, ...(style as StyleProps) }), {});
};

/**
 * Helper function to create responsive styles
 */
export const responsive = (
  styles: Partial<Record<keyof typeof theme.breakpoints, StyleProps>>
): StyleProps => {
  // This would typically be handled by a CSS-in-JS solution
  // For now, return the base style
  return styles.sm || {};
};
