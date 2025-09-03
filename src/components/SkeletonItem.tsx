import React from 'react';
import { PostCard } from './PostCard';

/**
 * Skeleton component that matches the exact dimensions of PostCard
 */
export const SkeletonItem: React.FC = () => (
  <PostCard isLoading />
);
