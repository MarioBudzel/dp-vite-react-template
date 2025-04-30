import { Flex } from '@/components/common';
import useSidebarContext from '@/layout/Dashboard/hooks/useSidebarContext';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import { ChevronLeft } from 'lucide-react';
import React from 'react';
import SidebarContent from '../../ui/SidebarContent';
import SidebarHeader from './SidebarHeader';

const SideBar: React.FC = () => {
  const theme = useTheme();
  const { isOpen, onToggle, onClose, onOpen } = useSidebarContext();
  const matchMD = useMediaQuery(theme.breakpoints.down('md'));

  React.useEffect(() => {
    if (matchMD) onClose();
    if (!matchMD) onOpen();
  }, [matchMD, onClose, onOpen]);

  return (
    <Flex
      bgcolor={'background.paper'}
      flexDirection={'column'}
      borderRight={'1px solid'}
      borderColor={'secondary.main'}
      boxShadow={2}
      position={'fixed'}
      maxHeight={'100dvh'}
      minHeight={'100dvh'}
      width={isOpen ? 'var(--dashboard-sidebar-full-width)' : 'var(--dashboard-sidebar-min-width)'}
      sx={{
        transition: 'width 120ms linear 0ms',
        [theme.breakpoints.down('sm')]: {
          visibility: 'hidden',
          display: 'none'
        }
      }}
      zIndex={200}
    >
      <Button
        sx={{
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'secondary.main',
          borderRadius: '50%',
          position: 'absolute',
          minWidth: 0,
          width: '25px',
          padding: 0,
          aspectRatio: 1,
          margin: 0,
          transform: 'translate(-50%, -50%)',
          top: 'calc(var(--dashboard-header-height)/2)',
          left: isOpen ? 'var(--dashboard-sidebar-full-width)' : 'var(--dashboard-sidebar-min-width)',
          transition: 'left 120ms linear 0ms',
          zIndex: 5000,
          '&:hover': {
            bgcolor: 'background.paper'
          }
        }}
        onClick={onToggle}
      >
        <ChevronLeft
          size={18}
          style={{
            color: theme.palette.secondary.main,
            transition: 'transform 0.3s ease-in-out',
            transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)'
          }}
        />
      </Button>
      <SidebarHeader />
      <SidebarContent />
    </Flex>
  );
};

export default SideBar;
