import { Flex } from '@/components/common';
import IconDrawer from '@/components/ui/Drawers/IconDrawer';
import SidebarContent from '@/layout/Dashboard/components/ui/SidebarContent';
import { useMediaQuery, useTheme } from '@mui/material';
import { ChartNoAxesGantt } from 'lucide-react';
import React from 'react';

const Collapsed: React.FC = () => {
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
        zIndex={5400}
        py={5}
      >
        <SidebarContent useDocsRoutes ignoreMediaQuery />
      </Flex>
    </IconDrawer>
  ) : null;
};

export default Collapsed;
