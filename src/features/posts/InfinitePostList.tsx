import React, { useCallback, useMemo } from 'react';
import { List as VirtualizedList, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';
import '@/styles/animations.css';
import { usePosts, useVirtualization } from '@/hooks';
import type { Post } from '@/types';
import { theme } from '@/styles/theme';
import { mergeStyles, containerStyles } from '@/styles/utils';
import { PostCard } from './PostCard';
import { SkeletonItem, ErrorState, LoadingState } from '@/components/ui';
import { VIRTUALIZATION_CONFIG } from '@/config';

const InfinitePostList: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    refetch,
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
        {item ? (
          <PostCard 
            post={item} 
            style={{ 
              margin: `${theme.spacing[1]} ${theme.spacing[3]}`,
              height: `${VIRTUALIZATION_CONFIG.DEFAULT_ROW_HEIGHT - 8}px`, // Account for margin
            }} 
          />
        ) : (
          <SkeletonItem />
        )}
      </div>
    );
  }, [items]);

  // Handle initial loading state
  if (isLoading) {
    return (
      <div style={mergeStyles(containerStyles.base, containerStyles.flex)}>
        <LoadingState />
      </div>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <div style={mergeStyles(containerStyles.base, containerStyles.flex)}>
        <ErrorState 
          message={error?.message} 
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  return (
    <div style={mergeStyles(containerStyles.base, containerStyles.flex)}>
      <div style={{ textAlign: 'center', marginBottom: theme.spacing[5] }}>
        <h1 style={{
          fontSize: theme.typography.fontSize['3xl'],
          fontWeight: theme.typography.fontWeight.bold,
          color: theme.colors.text.primary,
          margin: 0,
        }}>
          Infinite Scrolling Posts
        </h1>
      </div>
      
      <div style={{
        height: `${VIRTUALIZATION_CONFIG.LIST_HEIGHT}px`,
        width: '100%',
        maxWidth: '800px', // Limit max width for better centering
        margin: '0 auto', // Center the scroll container
        border: `1px solid ${theme.colors.border.light}`,
        borderRadius: theme.borderRadius.base,
        backgroundColor: theme.colors.background.primary,
        position: 'relative' as const,
      }}>
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
      
      {isFetchingNextPage && (
        <div style={{
          textAlign: 'center',
          padding: theme.spacing[4],
          color: theme.colors.text.secondary,
        }}>
          Loading more posts...
        </div>
      )}
    </div>
  );
};

export default InfinitePostList;