import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';

export const PrivateWrapper = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to={'/status/permission'} replace />;
  return <Outlet />;
};
