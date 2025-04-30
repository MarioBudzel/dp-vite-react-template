import { Flex } from '@/components/common';
import { useTheme } from '@mui/material';
import { Outlet } from 'react-router';
import Header from './components/common/Header';
import SideBar from './components/common/Sidebar';
import useSidebarContext from './hooks/useSidebarContext';

const DashboardLayout: React.FC = () => {
  const theme = useTheme();
  const { isOpen } = useSidebarContext();

  return (
    <Flex flexDirection={'column'} flex={'1 1 auto'} minHeight={'100%'}>
      <SideBar />
      <Flex
        flexDirection={'column'}
        flex={'1 1 auto'}
        sx={{
          transition: 'padding-left 120ms linear 0ms',
          [theme.breakpoints.up('sm')]: {
            paddingLeft: isOpen ? 'var(--dashboard-sidebar-full-width)' : 'var(--dashboard-sidebar-min-width)'
          }
        }}
      >
        <Flex
          component={'main'}
          sx={{
            flexDirection: 'column',
            flex: '1 1 auto',
            minHeight: '100dvh',
            height: '100%',
            maxWidth: isOpen ? 'calc(100dvw - var(--dashboard-sidebar-full-width))' : 'calc(100dvw - var(--dashboard-sidebar-min-width))',
            [theme.breakpoints.down('sm')]: {
              maxWidth: '100dvw'
            }
          }}
        >
          <Header />
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
