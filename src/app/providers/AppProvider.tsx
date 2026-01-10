import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { CalendarProvider } from '@/app/providers/CalendarProvider';
import { ErrorFallback } from '@/shared/components/feedback/ErrorFallback';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
      <BrowserRouter>
        <CalendarProvider>{children}</CalendarProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
