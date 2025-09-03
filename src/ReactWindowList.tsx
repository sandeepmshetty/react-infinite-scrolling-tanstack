import React, { useCallback, useMemo } from 'react';
import { List as VirtualizedList, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';
import '@/styles/animations.css';
import { usePosts, useVirtualization } from '@/hooks';
import type { Post } from '@/types';
import { clsOptimizedStyles } from '@/styles/clsOptimized';
import { PostItem } from './PostItem';
import { SkeletonItem, ErrorState, LoadingState } from '@/components';
import { VIRTUALIZATION_CONFIG } from '@/config';

const InfinitePostList: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error
  } = usePosts();

  const items: Post[] = useMemo(() => data?.pages.flat() || [], [data?.pages]);

  const { itemCount, handleRowsRendered } = useVirtualization({
    items,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  // Simplified row renderer with fixed heights to prevent CLS
  const rowRenderer = useCallback(({ index, key, style }: { index: number; key: string; style: React.CSSProperties }) => {
    const item = items[index];

    return (
      <div key={key} style={style}>
        {item ? <PostItem post={item} /> : <SkeletonItem />}
      </div>
    );
  }, [items]);

  // Handle initial loading state with same dimensions
  if (isLoading) {
    return (
      <div style={clsOptimizedStyles.container} className="cls-optimized-container">
        <LoadingState />
      </div>
    );
  }

  // Handle error state with same dimensions
  if (isError) {
    return (
      <div style={clsOptimizedStyles.container} className="cls-optimized-container">
        <ErrorState message={error?.message} />
      </div>
    );
  }

  return (
    <div style={clsOptimizedStyles.container} className="cls-optimized-container">
      <h1 style={clsOptimizedStyles.title} className="cls-optimized-text">
        Infinite Scrolling Posts
      </h1>
      <div style={clsOptimizedStyles.listContainer}>
        <AutoSizer>
          {({ height, width }) => (
            <VirtualizedList
              height={height}
              width={width}
              rowCount={itemCount}
              rowHeight={VIRTUALIZATION_CONFIG.DEFAULT_ROW_HEIGHT}
              rowRenderer={rowRenderer}
              onRowsRendered={handleRowsRendered}
              overscanRowCount={5} // Pre-render rows to reduce shifts
            />
          )}
        </AutoSizer>
      </div>
      <div style={clsOptimizedStyles.loadingMore}>
        {isFetchingNextPage ? 'Loading more posts...' : ''}
      </div>
    </div>
  );
};

export default InfinitePostList;