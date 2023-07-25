import { Suspense } from 'react';

import { useProtectedRoutes } from './protected.routing';
import { useRejectedRoutes } from './rejected.routing';

export default function AppRoute() {
  const publicRoutes = useRejectedRoutes();
  const privateRoutes = useProtectedRoutes();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {privateRoutes}
      {publicRoutes}
    </Suspense>
  );
}
