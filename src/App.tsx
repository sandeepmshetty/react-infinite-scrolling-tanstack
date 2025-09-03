import { QueryProvider } from '@/providers';
import { ErrorBoundary } from '@/components';
import InfinitePostList from './ReactWindowList';
import './App.css';

/**
 * Main application component
 * Sets up error boundary, query provider, and renders the infinite scroll list
 */
function App() {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <div className="app">
          <InfinitePostList />
        </div>
      </QueryProvider>
    </ErrorBoundary>
  );
}

export default App;