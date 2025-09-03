import { VIRTUALIZATION_CONFIG } from '@/config';

// Enhanced styles focused on CLS prevention
export const clsOptimizedStyles = {
  // Main container with fixed dimensions to prevent shifts
  container: {
    padding: '20px',
    minHeight: '100vh', // Prevent container height changes
    width: '100%',
    boxSizing: 'border-box' as const,
  },
  
  // Title with reserved space
  title: {
    textAlign: 'center' as const,
    marginBottom: '20px',
    height: '32px', // Fixed height to prevent shifts
    lineHeight: '32px',
    fontSize: '24px',
    fontWeight: 'bold' as const,
    color: '#333333', // Ensure good contrast on light background
  },
  
  // List container with absolutely fixed dimensions
  listContainer: {
    height: `${VIRTUALIZATION_CONFIG.LIST_HEIGHT}px`,
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    position: 'relative' as const,
    // Prevent any size changes
    flexShrink: 0,
    flexGrow: 0,
  },
  
  // Loading state with same dimensions as main content
  loadingState: {
    height: `${VIRTUALIZATION_CONFIG.LIST_HEIGHT + 100}px`, // Match total height
    display: 'flex' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    fontSize: '18px',
    width: '100%',
  },
  
  // Error state with same dimensions
  errorState: {
    height: `${VIRTUALIZATION_CONFIG.LIST_HEIGHT + 100}px`, // Match total height
    display: 'flex' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    color: 'red',
    fontSize: '16px',
    width: '100%',
  },
  
  // Fixed height loading more indicator
  loadingMore: {
    textAlign: 'center' as const,
    padding: '16px',
    fontSize: '14px',
    color: '#666',
    height: '48px', // Fixed height to prevent shifts
    lineHeight: '16px',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  
  // Skeleton loading item with exact same dimensions as real items
  skeletonItem: {
    padding: '16px',
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#f9f9f9',
    margin: '4px 8px',
    borderRadius: '8px',
    minHeight: `${VIRTUALIZATION_CONFIG.DEFAULT_ROW_HEIGHT - 32}px`, // Account for padding
    display: 'flex' as const,
    flexDirection: 'column' as const,
  },
  
  // Skeleton elements
  skeletonTitle: {
    height: '16px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    marginBottom: '8px',
    width: '70%',
    animation: 'pulse 1.5s ease-in-out infinite',
  },
  
  skeletonBody: {
    height: '14px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    marginBottom: '4px',
    width: '100%',
  },
  
  skeletonBodyShort: {
    height: '14px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    marginBottom: '8px',
    width: '60%',
  },
  
  skeletonMeta: {
    height: '12px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    width: '40%',
    marginTop: 'auto',
  },
};
