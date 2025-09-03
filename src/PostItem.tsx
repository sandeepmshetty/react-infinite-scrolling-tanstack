import React from 'react';
import type { PostItemProps } from '@/types';

const itemStyles = {
  container: {
    padding: '16px',
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#f9f9f9',
    margin: '4px 8px',
    borderRadius: '8px',
  },
  title: {
    margin: '0 0 8px 0',
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: '#333',
  },
  body: {
    margin: '0',
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.4',
  },
  meta: {
    color: '#666',
    fontSize: '12px',
  },
};

export const PostItem: React.FC<PostItemProps> = ({ post }) => (
  <div style={itemStyles.container}>
    <h3 style={itemStyles.title}>{post.title}</h3>
    <p style={itemStyles.body}>{post.body}</p>
    <small style={itemStyles.meta}>
      Post ID: {post.id} | User ID: {post.userId}
    </small>
  </div>
);
