import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks/store';
import { authService } from '~/services/auth/auth.service';
import { setProfile } from '~/stores/auth.slice';

const ProtectedGuard = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.auth.profile);
  const location = useLocation();

  useEffect(() => {
    getProfile();
  }, [dispatch]);

  const { mutate: getProfile, isLoading } = useMutation(() => authService.profile(), {
    onSuccess: (res) => dispatch(setProfile(res)),
    onError: () => dispatch(setProfile(null))
  });

  if (!profile && !authService.isAuthenticated() && !isLoading) {
    return <Navigate to='/auth/login' state={{ protectedFrom: location.pathname }} />;
  }

  return <Outlet />;
};

export default ProtectedGuard;
