import React from 'react';
import { clsOptimizedStyles } from '@/styles/clsOptimized';

// Skeleton component that matches the exact dimensions of PostItem
export const SkeletonItem: React.FC = () => (
  <div style={clsOptimizedStyles.skeletonItem}>
    <div style={clsOptimizedStyles.skeletonTitle} />
    <div style={clsOptimizedStyles.skeletonBody} />
    <div style={clsOptimizedStyles.skeletonBodyShort} />
    <div style={clsOptimizedStyles.skeletonMeta} />
  </div>
);
