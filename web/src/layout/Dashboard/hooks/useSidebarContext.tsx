import React from 'react';
import { SideBarContext } from '../context/SidebarContext';

const useSidebarContext = () => {
  const context = React.useContext(SideBarContext);

  if (!context) throw new Error('Sidebar context can only be used inside its provider!');

  return context;
};

export default useSidebarContext;
