import { Navigate, Outlet } from 'react-router';

import { useAuth } from '../context/AuthContext';

export const PublicWrapper = () => {
  const { user: AuthUser } = useAuth();

  if (AuthUser) return <Navigate to={'dashboard/app'} replace />;

  return <Outlet />;
};
