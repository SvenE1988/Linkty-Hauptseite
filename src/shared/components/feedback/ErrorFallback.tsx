import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-navy">
      <div className="text-center text-white max-w-md px-4">
        <h1 className="text-4xl font-bold mb-4">Etwas ist schiefgelaufen</h1>
        <p className="text-gray-400 mb-8">Ein unerwarteter Fehler ist aufgetreten.</p>
        <button
          onClick={resetErrorBoundary}
          className="px-6 py-3 bg-brand-teal text-brand-navy rounded-lg font-semibold hover:bg-brand-teal/90 transition-colors"
        >
          Seite neu laden
        </button>
      </div>
    </div>
  );
};
