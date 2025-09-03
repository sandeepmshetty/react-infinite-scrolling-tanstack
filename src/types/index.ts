// API Response Types
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Component Props Types
export interface PostItemProps {
  post: Post;
}

export interface ErrorStateProps {
  message?: string;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// Hook Types
export interface UseVirtualizationProps {
  items: Post[];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export interface UseVirtualizationReturn {
  itemCount: number;
  handleRowsRendered: ({ stopIndex }: { stopIndex: number }) => void;
}
