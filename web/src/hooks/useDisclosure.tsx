import React, { useCallback } from 'react';

const useDisclosure = (defaultOpen = false) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, onOpen, onClose, onToggle };
};

export default useDisclosure;
