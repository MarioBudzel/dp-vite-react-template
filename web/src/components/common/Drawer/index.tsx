import useDisclosure from '@/hooks/useDisclosure';
import React from 'react';

import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';

export type TDrawerProps = {
  children?: React.ReactElement;
  disableBackdropClick?: boolean;
  useBackDropEffects?: boolean;
  autoCloseOnCondition?: boolean;
  autoCloseCondition?: boolean;
};

const Drawer = React.forwardRef<unknown, TDrawerProps & Omit<DrawerProps, 'open' | 'onClose'>>((props, ref) => {
  const { children, disableBackdropClick, useBackDropEffects, autoCloseOnCondition, autoCloseCondition, ...rest } = props;
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();
  const handleClose = (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
    if (disableBackdropClick && reason === 'backdropClick') return;

    onToggle();
  };

  React.useImperativeHandle(ref, () => ({
    onToggle: onToggle,
    onClose,
    onOpen
  }));

  React.useEffect(() => {
    if (autoCloseOnCondition && autoCloseCondition && isOpen) onToggle();
  }, [autoCloseCondition, autoCloseOnCondition, isOpen, onToggle]);

  return (
    <MuiDrawer
      open={isOpen}
      onClose={handleClose}
      slotProps={{
        backdrop: useBackDropEffects
          ? {
              sx: {
                backdropFilter: 'blur(5px)',
                backgroundColor: 'rgba(0, 0, 0, .1)'
              }
            }
          : {
              sx: {
                backgroundColor: 'transparent'
              }
            }
      }}
      PaperProps={{
        sx: {
          backgroundColor: 'transparent'
        }
      }}
      {...rest}
    >
      {children}
    </MuiDrawer>
  );
});

export default Drawer;
