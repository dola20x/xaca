import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import ProtectedGuard from './protected.guard';
const ExamplePage = React.lazy(() => import('~/pages/ExamplePage'));

export const useProtectedRoutes = () => {
  const protectedRouteElements = useRoutes([
    {
      path: 'protected',
      element: <ProtectedGuard />,
      children: [
        {
          path: '',
          element: (
            <Suspense>
              <ExamplePage />
            </Suspense>
          )
        }
      ]
    }
  ]);

  return protectedRouteElements;
};
