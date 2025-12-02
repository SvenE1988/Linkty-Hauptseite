import React, { lazy, Suspense } from 'react';

const VapiFloatingWidget = lazy(() => import('./VapiFloatingWidget'));

interface VapiLazyWrapperProps {
  pageName: string;
}

const VapiLazyWrapper: React.FC<VapiLazyWrapperProps> = ({ pageName }) => {
  return (
    <Suspense fallback={null}>
      <VapiFloatingWidget pageName={pageName} />
    </Suspense>
  );
};

export default VapiLazyWrapper;
