import { useInfiniteQuery } from '@tanstack/react-query';
import type { Post } from '@/types';

const fetchPosts = async ({ pageParam = 0 }): Promise<Post[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_start=${pageParam}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

export const usePosts = () => {
  return useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, allPages) => {
      // JSONPlaceholder has 100 posts total, so we stop when we've loaded all
      if (lastPage.length === 0 || allPages.flat().length >= 100) {
        return undefined;
      }
      return allPages.flat().length;
    },
    initialPageParam: 0,
    // Prevent excessive refetching
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
    refetchOnMount: false, // Don't refetch on component remount
  });
};