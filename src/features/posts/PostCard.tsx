import React from 'react';
import { Card, Text, Skeleton } from '@/components/ui';
import { theme } from '@/styles/theme';
import { mergeStyles } from '@/styles/utils';
import type { Post } from '@/types';

export interface PostCardProps {
  post?: Post;
  isLoading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Improved PostCard component with consistent styling and loading states
 */
export const PostCard: React.FC<PostCardProps> = ({
  post,
  isLoading = false,
  className = '',
  style,
}) => {
  if (isLoading || !post) {
    return (
      <Card
        variant="spacious"
        className={`post-card post-card--loading ${className}`}
        style={mergeStyles(
          {
            height: '152px', // Updated to match new row height minus margin
          },
          style
        )}
      >
        <div style={{ marginBottom: theme.spacing[4] }}>
          <Skeleton height="28px" width="85%" borderRadius={theme.borderRadius.sm} />
        </div>
        <div style={{ marginBottom: theme.spacing[3] }}>
          <Skeleton height="18px" width="100%" borderRadius={theme.borderRadius.sm} />
        </div>
        <div style={{ marginBottom: theme.spacing[3] }}>
          <Skeleton height="18px" width="95%" borderRadius={theme.borderRadius.sm} />
        </div>
        <div style={{ marginBottom: theme.spacing[2] }}>
          <Skeleton height="18px" width="85%" borderRadius={theme.borderRadius.sm} />
        </div>
        <div style={{ marginTop: 'auto' }}>
          <Skeleton height="16px" width="45%" borderRadius={theme.borderRadius.sm} />
        </div>
      </Card>
    );
  }

  return (
    <Card
      variant="spacious"
      hoverable
      className={`post-card ${className}`}
      style={mergeStyles(
        {
          height: '152px', // Updated to match new row height minus margin
          display: 'flex',
          flexDirection: 'column',
          transition: theme.transitions.base,
        },
        style
      )}
    >
      <Text
        as="h3"
        size="xl"
        weight="semibold"
        color="primary"
        style={{
          margin: 0,
          marginBottom: theme.spacing[3],
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          lineHeight: '1.4',
        }}
        title={post.title}
      >
        {post.title}
      </Text>

      <Text
        color="secondary"
        size="base"
        style={{
          margin: 0,
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          lineHeight: '1.5',
        }}
        title={post.body}
      >
        {post.body}
      </Text>

      <div
        style={{
          marginTop: 'auto',
          paddingTop: theme.spacing[2],
          borderTop: `1px solid ${theme.colors.border.light}`,
        }}
      >
        <Text
          size="sm"
          color="tertiary"
          style={{ margin: 0 }}
        >
          Post #{post.id} • User {post.userId}
        </Text>
      </div>
    </Card>
  );
};
