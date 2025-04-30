import { useMaintenanceContext } from '@/hooks/useMaintenanceContext';
import { Maintenance } from '@/pages/Status';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MaintenanceWrapper: React.FC<{ returnWrapper?: React.ReactElement }> = ({ returnWrapper }) => {
  const { maintenance } = useMaintenanceContext();

  if (maintenance) return <Maintenance />;
  if (returnWrapper) return returnWrapper;

  return <Outlet />;
};

export default MaintenanceWrapper;
