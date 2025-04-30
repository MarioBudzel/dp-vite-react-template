import logo from '@/assets/logo.svg';
import { Flex } from '@/components/common';
import useSidebarContext from '@/layout/Dashboard/hooks/useSidebarContext';
import { useTheme } from '@mui/material';

const SidebarHeader: React.FC = () => {
  const theme = useTheme();
  const { isOpen } = useSidebarContext();

  return (
    <Flex
      height={'var(--dashboard-header-height)'}
      style={{
        marginLeft: isOpen ? 5 : 'auto',
        marginRight: isOpen ? 0 : 'auto',
        transition: 'margin 120ms linear 0ms'
      }}
      alignItems={'center'}
      py={1}
      px={2}
    >
      <img
        src={logo}
        alt="App logo"
        style={{
          height: 'calc(100%/1.3)',
          filter: `drop-shadow(0px 0px 25px rgba(${theme.palette.secondary.lightChannel}, .3))`
        }}
      />
    </Flex>
  );
};

export default SidebarHeader;
