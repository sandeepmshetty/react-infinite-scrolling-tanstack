import React from 'react';
import { PostCard } from '@/features/posts';

/**
 * Skeleton component that matches the exact dimensions of PostCard
 */
export const SkeletonItem: React.FC = () => (
  <PostCard isLoading />
);
