import { MaintenanceContext } from '@/context/MaintenanceContext';
import React from 'react';

export const useMaintenanceContext = () => {
  const context = React.useContext(MaintenanceContext);

  if (!context) throw new Error('Maintenance context is only available under its provider!');

  return context;
};
