import React from 'react';

interface LoadingSpinnerProps {
  variant?: 'navy' | 'white';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  variant = 'navy',
  text = 'Lädt...',
}) => {
  const bgClass = variant === 'navy' ? 'bg-brand-navy' : 'bg-white';
  const spinnerBorder = variant === 'navy' ? 'border-brand-teal' : 'border-engage-teal';
  const textColor = variant === 'navy' ? 'text-white' : 'text-engage-primary';

  return (
    <div className={`min-h-screen flex items-center justify-center ${bgClass}`}>
      <div className="text-center">
        <div
          className={`w-16 h-16 border-4 ${spinnerBorder} border-t-transparent rounded-full animate-spin mx-auto mb-4`}
          role="status"
          aria-label={text}
        />
        <p className={`${textColor} font-semibold`}>{text}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
