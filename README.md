# React Infinite Scrolling with TanStack Query

A performant React application demonstrating infinite scrolling with virtualization using TanStack Query (React Query) and React-Virtualized.

## ✨ Features

- **Infinite Scrolling**: Seamlessly load more content as you scroll
- **Virtualization**: Efficient rendering of large lists with React-Virtualized
- **Performance Optimized**: 
  - CLS (Cumulative Layout Shift) prevention with fixed heights
  - Smart prefetching with configurable thresholds
  - Optimized re-renders with proper memoization
- **Error Handling**: Comprehensive error boundaries and error states
- **Loading States**: Skeleton loading with smooth animations
- **TypeScript**: Full type safety throughout the application
- **Modern Stack**: Built with Vite, React 19, and modern tooling

## 🛠️ Tech Stack

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **TanStack Query v5** - Data Fetching & Caching
- **React-Virtualized** - List Virtualization
- **Vite** - Build Tool & Dev Server
- **ESLint** - Code Linting

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd infinite-scroll-tanstack
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ErrorBoundary.tsx
│   ├── ErrorState.tsx
│   ├── LoadingState.tsx
│   └── SkeletonItem.tsx
├── config/             # Configuration constants
│   └── constants.ts
├── hooks/              # Custom React hooks
│   ├── useQueryHook.ts
│   └── useVirtualization.ts
├── providers/          # Context providers
│   └── QueryProvider.tsx
├── styles/             # Styling and animations
│   ├── animations.css
│   └── clsOptimized.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
├── PostItem.tsx        # Individual post component
└── ReactWindowList.tsx # Virtualized list component
```

## 🚀 Key Features Explained

### Infinite Scrolling with TanStack Query

The application uses TanStack Query's `useInfiniteQuery` hook to manage infinite data fetching:

- Automatic pagination with `getNextPageParam`
- Intelligent caching and stale data handling
- Background refetching prevention for better UX
- Error handling and retry logic

### Virtualization

React-Virtualized is used to render only visible items:

- Fixed row heights (120px) to prevent layout shift
- Configurable prefetch threshold (10 items)
- AutoSizer for responsive list dimensions

### Performance Optimizations

- **CLS Prevention**: Fixed heights and proper skeleton states
- **Smart Prefetching**: Load next page when approaching the end
- **Memoization**: Optimized re-renders with `useMemo` and `useCallback`
- **Bundle Optimization**: Tree-shaking and code splitting with Vite

## ⚙️ Configuration

Key configuration options in `src/config/constants.ts`:

```typescript
export const VIRTUALIZATION_CONFIG = {
  DEFAULT_ROW_HEIGHT: 120,    // Fixed height for each item
  PREFETCH_THRESHOLD: 10,     // Items before end to trigger next page
  LIST_HEIGHT: 600,           // Container height
};
```

## 🎨 Styling

The application includes:

- Smooth loading animations
- Responsive design
- Modern CSS with proper spacing
- CLS-optimized layouts

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔧 API Integration

Currently uses JSONPlaceholder API for demo data:
- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Pagination: 10 items per page
- Total: 100 posts

To integrate with your own API, modify the `fetchPosts` function in `src/hooks/useQueryHook.ts`.

## 🧪 Error Handling

The application includes comprehensive error handling:

- **Error Boundaries**: Catch and display component errors
- **Network Errors**: Graceful handling of API failures
- **Retry Logic**: Automatic retries with TanStack Query
- **User Feedback**: Clear error messages and recovery options

## 🎯 Best Practices Implemented

1. **Type Safety**: Full TypeScript coverage
2. **Component Composition**: Modular, reusable components
3. **Custom Hooks**: Logic separation and reusability
4. **Error Boundaries**: Graceful error handling
5. **Performance**: Virtualization and memoization
6. **Accessibility**: Proper ARIA labels and semantic HTML
7. **Code Organization**: Clear folder structure and imports

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [TanStack Query](https://tanstack.com/query) for excellent data fetching
- [React-Virtualized](https://bvaughn.github.io/react-virtualized/) for virtualization
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for demo API