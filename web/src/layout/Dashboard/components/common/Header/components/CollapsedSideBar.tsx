import { Flex } from '@/components/common';
import IconDrawer from '@/components/ui/Drawers/IconDrawer';
import { useMediaQuery, useTheme } from '@mui/material';
import { ChartNoAxesGantt } from 'lucide-react';
import React from 'react';
import SidebarContent from '../../../ui/SidebarContent';
import SidebarHeader from '../../Sidebar/SidebarHeader';

const CollapsedSideBar: React.FC = () => {
  const drawerRef = React.useRef<{
    onToggle: () => void;
    onClose: () => void;
  }>(null);

  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));

  React.useEffect(() => {
    if (!matchSM) drawerRef?.current?.onClose?.();
  }, [matchSM]);

  return matchSM ? (
    <IconDrawer
      drawerProps={{ useBackDropEffects: true, anchor: 'left' }}
      ref={drawerRef}
      icon={
        <ChartNoAxesGantt
          style={{
            color: theme.palette.text.primary
          }}
        />
      }
    >
      <Flex
        bgcolor={'background.paper'}
        flexDirection={'column'}
        borderRight={'1px solid'}
        borderColor={'secondary.main'}
        boxShadow={2}
        position={'fixed'}
        maxHeight={'100dvh'}
        minHeight={'100dvh'}
        width={'var(--dashboard-sidebar-full-width)'}
        /*       sx={{
        transition: 'width 120ms linear 0ms',
        [theme.breakpoints.down('sm')]: {
          visibility: 'hidden',
          display: 'none'
        }
      }} */
        zIndex={5400}
      >
        <SidebarHeader />
        <SidebarContent ignoreMediaQuery />
      </Flex>
    </IconDrawer>
  ) : null;
};

export default CollapsedSideBar;
