import { useGetCurrentUserQuery } from '@/store/api';
import React from 'react';
import { Navigate, Outlet } from 'react-router';
import Loading from '../common/Loading';

const AdminWrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { data: currentUser, isLoading } = useGetCurrentUserQuery({});

  if (isLoading) return <Loading />;
  if (!currentUser) return <Navigate to="/status/error" replace />;

  if (!currentUser?.user?.isAdmin) return <Navigate to={'/status/permission'} replace />;

  if (children) return <>{children}</>;

  return <Outlet />;
};

export default AdminWrapper;
