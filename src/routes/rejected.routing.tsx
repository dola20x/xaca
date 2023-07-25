import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import RejectedGuard from './rejected.guard';

const LoginPage = React.lazy(() => import('~/pages/Login'));

export const useRejectedRoutes = () => {
  const rejectedRouteElements = useRoutes([
    {
      path: 'auth',
      element: <RejectedGuard />,
      children: [
        {
          path: 'login',
          element: (
            <Suspense>
              <LoginPage />
            </Suspense>
          )
        }
      ]
    }
  ]);

  return rejectedRouteElements;
};
