import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { Button, Card, Text } from '@/components/ui';
import { theme } from '@/styles/theme';
import { layoutStyles, mergeStyles } from '@/styles/utils';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>;
}

/**
 * Enhanced Error boundary component with better styling and retry functionality
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error Boundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} retry={this.handleRetry} />;
      }

      // Default error UI
      return (
        <div
          style={mergeStyles(
            layoutStyles.center,
            {
              minHeight: '100vh',
              padding: theme.spacing[5],
              backgroundColor: theme.colors.background.secondary,
            }
          )}
        >
          <Card
            variant="spacious"
            style={{
              maxWidth: '500px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                margin: '0 auto',
                marginBottom: theme.spacing[4],
                borderRadius: '50%',
                backgroundColor: theme.colors.semantic.error,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.colors.text.inverse,
                fontSize: '24px',
              }}
            >
              ⚠️
            </div>

            <Text as="h1" size="2xl" weight="bold" align="center" style={{ marginBottom: theme.spacing[3] }}>
              Oops! Something went wrong
            </Text>

            <Text color="secondary" align="center" style={{ marginBottom: theme.spacing[6] }}>
              We're sorry, but something unexpected happened. This error has been logged 
              and our team will investigate. Please try refreshing the page or contact support 
              if the problem persists.
            </Text>

            <div style={layoutStyles.inline(3)}>
              <Button
                variant="primary"
                onClick={this.handleRetry}
              >
                Try Again
              </Button>
              
              <Button
                variant="secondary"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </Button>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <details
                style={{
                  marginTop: theme.spacing[6],
                  padding: theme.spacing[4],
                  backgroundColor: theme.colors.background.tertiary,
                  borderRadius: theme.borderRadius.base,
                  textAlign: 'left',
                  fontSize: theme.typography.fontSize.sm,
                  fontFamily: theme.typography.fontFamily.mono,
                }}
              >
                <summary style={{ cursor: 'pointer', marginBottom: theme.spacing[2] }}>
                  Error Details (Development)
                </summary>
                <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                  {this.state.error.message}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
