import { useAuth } from '@/context/AuthContext';
import { Permissions } from '@/enums';
import React from 'react';

const PermissionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  if (user?.parmission !== Permissions.RW) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export default PermissionWrapper;
