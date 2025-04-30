import useDisclosure from '@/hooks/useDisclosure';
import React from 'react';

export const SideBarContext = React.createContext<{
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onOpen: () => void;
}>({
  isOpen: true,
  onToggle: () => {},
  onClose: () => {},
  onOpen: () => {}
});

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure(true);

  return <SideBarContext.Provider value={{ isOpen, onToggle, onClose, onOpen }}>{children}</SideBarContext.Provider>;
};
