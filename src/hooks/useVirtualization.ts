import { useCallback, useRef } from 'react';
import type { UseVirtualizationProps, UseVirtualizationReturn } from '@/types';
import { VIRTUALIZATION_CONFIG } from '@/config';

export const useVirtualization = ({
  items,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: UseVirtualizationProps): UseVirtualizationReturn => {
  // Track the last fetch request to prevent duplicate calls
  const lastFetchIndexRef = useRef<number>(-1);
  
  // Calculate total item count including loading placeholders
  const itemCount = hasNextPage ? items.length + 5 : items.length; // Add 5 skeleton items

  // Handle rows rendered event with debouncing logic
  const handleRowsRendered = useCallback(({ stopIndex }: { stopIndex: number }) => {
    const shouldFetch = 
      stopIndex >= items.length - VIRTUALIZATION_CONFIG.PREFETCH_THRESHOLD && 
      hasNextPage && 
      !isFetchingNextPage &&
      stopIndex !== lastFetchIndexRef.current; // Prevent duplicate fetches for same index
    
    if (shouldFetch) {
      lastFetchIndexRef.current = stopIndex;
      fetchNextPage();
    }
  }, [items.length, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    itemCount,
    handleRowsRendered,
  };
};
